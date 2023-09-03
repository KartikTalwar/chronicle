// 01a271cb1b9d2ce4eee63596d857675a28e70cf42adfd32f0928f9fed7c1879de4

(async () => {
    const {
      RequestNetwork,
      Types,
      Utils,
    } = require("@requestnetwork/request-client.js");
    const {
      EthereumPrivateKeySignatureProvider,
    } = require("@requestnetwork/epk-signature");
    const {
      approveErc20,
      hasSufficientFunds,
      hasErc20Approval,
      payRequest,
    } = require("@requestnetwork/payment-processor");
    const { providers, Wallet } = require("ethers");
    const { config } = require("dotenv");
  
    // Load environment variables from .env file (without overriding variables already set)
    config();
  
    const epkSignatureProvider = new EthereumPrivateKeySignatureProvider({
      method: Types.Signature.METHOD.ECDSA,
      privateKey: process.env.PRIVATE_KEY, // Must include 0x prefix
    });
  
    const requestClient = new RequestNetwork({
      nodeConnectionConfig: {
        baseURL: "https://goerli.gateway.request.network/",
      },
      signatureProvider: epkSignatureProvider,
    });
  
    const payeeIdentity = "0x0A34371dc060875546D546a3106542F6eB62B774";
    const payerIdentity = payeeIdentity;
    const paymentRecipient = payeeIdentity;
    const feeRecipient = "0x0000000000000000000000000000000000000000";
  
    const requestCreateParameters = {
      requestInfo: {
        currency: {
          type: Types.RequestLogic.CURRENCY.ERC20,
          value: "0xBA62BCfcAaFc6622853cca2BE6Ac7d845BC0f2Dc",
          network: "goerli",
        },
        expectedAmount: "100000000000000",
        payee: {
          type: Types.Identity.TYPE.ETHEREUM_ADDRESS,
          value: payeeIdentity,
        },
        payer: {
          type: Types.Identity.TYPE.ETHEREUM_ADDRESS,
          value: payerIdentity,
        },
        timestamp: Utils.getCurrentTimestampInSecond(),
      },
      paymentNetwork: {
        id: Types.Extension.PAYMENT_NETWORK_ID.ERC20_FEE_PROXY_CONTRACT,
        parameters: {
          paymentNetworkName: "goerli",
          paymentAddress: paymentRecipient,
          feeAddress: feeRecipient,
          feeAmount: "0",
        },
      },
      contentData: {
        reason: "SaaS Subscription",
        dueDate: "2023-09-03",
      },
      signer: {
        type: Types.Identity.TYPE.ETHEREUM_ADDRESS,
        value: payeeIdentity,
      },
    };
  
    const request = await requestClient.createRequest(requestCreateParameters);
    let requestData = await request.waitForConfirmation();
    console.log(`Created Request: ${JSON.stringify(requestData)}`);
  
    const provider = new providers.JsonRpcProvider(
      "https://gateway.tenderly.co/public/goerli",
    );
    const payerWallet = new Wallet(
      process.env.PRIVATE_KEY,
      provider,
    );
  
    console.log(
      `Checking if payer ${payerWallet.address} has sufficient funds...`,
    );
    const _hasSufficientFunds = await hasSufficientFunds(
      requestData,
      payerWallet.address,
      {
        provider: provider,
      },
    );
    console.log(`_hasSufficientFunds = ${_hasSufficientFunds}`);
    if (!_hasSufficientFunds) {
      throw new Error(`Insufficient Funds: ${payerWallet.address}`);
    }
  
    console.log(
      `Checking if payer ${payerWallet.address} has sufficient approval...`,
    );
    const _hasErc20Approval = await hasErc20Approval(
      requestData,
      payerWallet.address,
      provider,
    );
    console.log(`_hasErc20Approval = ${_hasErc20Approval}`);
    if (!_hasErc20Approval) {
      console.log(`Requesting approval...`);
      const approvalTx = await approveErc20(requestData, payerWallet);
      await approvalTx.wait(2);
      console.log(`Approval granted. ${approvalTx.hash}`);
    }
  
    const paymentTx = await payRequest(requestData, payerWallet);
    await paymentTx.wait(2);
    console.log(`Payment complete. ${paymentTx.hash}`);
  
    let startTime = Date.now();
    while (requestData.balance?.balance < requestData.expectedAmount) {
      requestData = await request.refresh();
      console.log(`current balance = ${requestData.balance?.balance}`);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Check if 5 seconds have passed, and if so, break out of the loop
      if (Date.now() - startTime >= 5000) {
        console.log("Timeout: Exiting loop after 5 seconds.");
        break;
      }
    }
  })();