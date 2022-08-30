window.baseURL = "http://119.8.123.183/api/v1";
window.checkNetWork = false, //是否开启小狐狸钱包网络检测和切换
window.metaMaskNetWork = {
  chainId: "0x89", // 网络id，16进制的字符串
  chainName: "Polygon Mainnet", // 添加到钱包后显示的网络名称
  rpcUrls: ["https://rpc-mainnet.maticvigil.com"], // rpc地址
  blockExplorerUrls: ["https://explorer.matic.network"], // 网络对应的区块浏览器
  nativeCurrency: {
    // 网络主币的信息
    name: "MATIC",
    symbol: "MATIC",
    decimals: 18,
  },
};
window.usdtToken = '0x1F0eD56B5d2fc04E70a7926DE024955D6769Ffea'