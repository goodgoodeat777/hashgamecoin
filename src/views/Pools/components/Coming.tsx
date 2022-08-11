import React from "react";
import styled from "styled-components";
import { Image, Button } from "@pancakeswap-libs/uikit";
import { CommunityTag } from "components/Tags";
import useI18n from "hooks/useI18n";
import Card from "./Card";
import CardTitle from "./CardTitle";

const Balance = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 40px;
  font-weight: 600;
`;

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
  margin-bottom: 16px;
`;

const DetailPlaceholder = styled.div`
  display: flex;
  font-size: 14px;
`;
const Value = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
`;

const Footer = styled.div`
  border-top: 1px solid ${({ theme }) => (theme.isDark ? "#524B63" : "#E9EAEB")};
  padding: 24px;
`;
const Coming: React.FC = () => {
  const TranslateString = useI18n();

  return (
    <Card>
      <div style={{ padding: "24px" }}>
        <Balance>下注金額</Balance>

        <Button
          variant="secondary"
          as="a"
          href="https://t.me/SiaCashCoinChat"
          external
          width="100%"
          mb="16px"
        >
          {TranslateString(418, "Apply Now")}
        </Button>
      </div>
    </Card>
  );
};

export default Coming;
