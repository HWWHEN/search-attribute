window.baseURL = "https://preapi-marketplace.mechainfinity.com/api/v1";
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
window.usdtToken = '0x42eeb33D1354B2bbE452D62877eE804B572B9961'