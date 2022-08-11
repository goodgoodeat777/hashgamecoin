import React from "react";
import styled from "styled-components";
import { Heading, Text, BaseLayout } from "@pancakeswap-libs/uikit";
import { useTranslation } from "contexts/Localization";
import Page from "components/layout/Page";
import FarmStakingCard from "views/Home/components/FarmStakingCard";
import LotteryCard from "views/Home/components/LotteryCard";
import CakeStats from "views/Home/components/CakeStats";
import TotalValueLockedCard from "views/Home/components/TotalValueLockedCard";
import EarnAPYCard from "views/Home/components/EarnAPYCard";
import EarnAssetCard from "views/Home/components/EarnAssetCard";
import WinCard from "views/Home/components/WinCard";

const Hero = styled.div`
  align-items: center;
  // background-image: url('/images/pan-bg2.svg'), url('/images/pan-bg.svg');
  background-repeat: no-repeat;
  background-position: left top, right top;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 136px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url("/images/momo.svg"), url("/images/momo.svg");
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`;

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`;

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 4;
    }
  }
`;

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <Hero>
        <Heading as="h1" size="xl" mb="24px" color="secondary">
          {t("Hash Game Cash")}
        </Heading>
        <Text>
          {t("HashGameCash is committed to providing a fair gaming platform")}
        </Text>
        <Text>{t("")}</Text>
        <Text>{t("")}</Text>
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <EarnAPYCard />
          {/* <EarnAssetCard /> */}
          {/* <LotteryCard /> */}
        </Cards>
        <CTACards>
          {/* <EarnAPYCard /> */}
          {/* <WinCard /> */}
        </CTACards>
        <Cards>
          <CakeStats />
          <TotalValueLockedCard />
        </Cards>
      </div>
    </Page>
  );
};

export default Home;
