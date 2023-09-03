import Home from './index'

async function getData() {
  const fetchPrice = async (item: any) => {
    const response = await fetch(`http://localhost:3000/api/${item.id}?key=test`);
    const result = await response.json();
    return result.price;
  }

  const [ethusd, btcusd, daiusd] = await Promise.all([
    fetchPrice({ id: 'ethusd' }),
    fetchPrice({ id: 'btcusd' }),
    fetchPrice({ id: 'daiusd' }),
  ])

  return {
    ethusd,
    btcusd,
    daiusd,
  }
}


export default async function Page() {
  const data = await getData()

  return <Home feed={data} />
}