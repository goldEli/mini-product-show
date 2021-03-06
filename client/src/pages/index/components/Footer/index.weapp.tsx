import React, { Component } from "react";
import Taro from "@tarojs/taro";
import { View, Button } from "@tarojs/components";
import { MenuContext } from "@/pages/index/context/MenuContext";
import { IFurniture } from "@/type";

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = props => {
  const { list } = React.useContext(MenuContext);

  const sum = React.useMemo(() => {
    return list
      ?.reduce(
        (prev, item) => prev + (item.number * (item.price as number) || 0),
        0
      )
      .toFixed(2);
  }, [list]);

  const numberOfProducts =
    React.useMemo(() => {
      return list?.reduce((prev, item) => prev + (item.number || 0), 0);
    }, [list]) || 0;

  const text = JSON.stringify(filterData(list));

  const toOrderPage = () => {
    if (numberOfProducts <= 0) {
      Taro.showToast({
        title: "您还未选择任何商品，请先选择。",
        icon: "none",
        duration: 2000
      });
      return;
    }
    Taro.navigateTo({
      url: `/pages/order/index?text=${text}&fromHome=true`
    });
  };

  return (
    <View className="footer">
      <View className="inner">
        <View onLongPress={goToLogin} className="price">{` ￥${sum} 元`}</View>
        <Button
          // openType="share"

          onClick={toOrderPage}
          // data-sum={sum}
          // data-text={text}
          className="button"
        >
          选好了，点我
        </Button>
      </View>
    </View>
  );
};

export default Footer;
const filterData = (data: IFurniture[] = []) => {
  return data
    .filter(item => item?.number > 0)
    .map(item => ({
      title: item.title,
      number: item.number,
      price: item.price
    }));
};

const goToLogin = () => {
  Taro.redirectTo({
    url: "/pages/login/login"
  });
};
