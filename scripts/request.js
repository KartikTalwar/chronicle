(async () => {
    const {
      RequestNetwork,
      Types,
      Utils,
    } = require("@requestnetwork/request-client.js");
    const {
      EthereumPrivateKeySignatureProvider,
    } = require("@requestnetwork/epk-signature");
  
    const epkSignatureProvider = new EthereumPrivateKeySignatureProvider({
      method: Types.Signature.METHOD.ECDSA,
    privateKey: process.env.PRIVATE_KEY,
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
    
      const req = await requestClient.createRequest(requestCreateParameters);
      const requestData = await req.waitForConfirmation();

      console.log(JSON.stringify(requestData));
      console.log("\n\n")
      console.log(`Created Request: ${requestData.requestId}`)
  })();