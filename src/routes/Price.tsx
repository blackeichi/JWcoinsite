import { fetchCoinPrice } from "../api";
import { useQuery } from "react-query";
import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

interface IPriceProp {
  coinId: string;
}

function Price({ coinId }: IPriceProp) {
  const { isLoading, data } = useQuery<PriceData>(
    ["price", coinId],
    () => fetchCoinPrice(coinId),
    {
      refetchInterval: 5000,
    }
  );
  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : (
        <Content>
          <span>Most : {data?.quotes.USD.ath_price.toFixed(2)}</span>
          <span>시가총액 : {data?.quotes.USD.market_cap.toFixed(2)}</span>
          <span>현재 가격 : {data?.quotes.USD.price.toFixed(2)}</span>
        </Content>
      )}
    </div>
  );
}

export default Price;
