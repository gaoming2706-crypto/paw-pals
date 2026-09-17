import { MeetupItem, PetInfo, PhotoFeedItem, ProductItem, SupplementItem } from '../types';

export const APP_LOGO = 'https://lh3.googleusercontent.com/aida/AEtjO1ViiBJmywKcFKtIQrXytKG5ZmPFmXYaK3gnh-uQVFseBNYLI5aFTY_zTKiz2aY0Pgn2fylP-wWoSZWVpcA_MuDKS1L4lXywQxAMg2-pQO3cQhsMLid41DKYFRsb2AAjulmMlqEBTFgjJ35jGF25DaX7VO-wFZW9DHl_yzDZ5tXpuZz7RztjNXN-UloLdoHdr1W8g27P3wmm3maX4R9tjWnJJ0hI0cRcH04QtGls8mo5RWKZEC06aot96w';

export const DEFAULT_PET: PetInfo = {
  id: 'pet-1',
  name: '麦麦',
  englishName: 'Max',
  breed: '金毛寻回犬',
  age: '1岁2个月',
  weight: 24.5,
  gender: 'male',
  birthday: '2023.08.15',
  color: '暖金色',
  neutered: true,
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYiJKB3RKnC-pOaNJei3GHbtPVx9JAXxP0aRAsTB0KUQOdTihsofLdE5T-KABTPysqJaMavj5UoN6db4lk8MoUb9HYfY2-1n9YPJB2Jt9D57qdyXUOfqislOli2K4HLpJdiwVm0BLGdrx8ShkoZWnzMFWEPyUkE5JdZ8m85kGErC2JunxvutoK_WWEMoILzQ4OI1Lav29dgiGfvYoGOBE7nCceLfIGEKI4SiuvQV1id2ey8hnj-Gwy',
  chipCode: 'CHIP-9820-2023-8891',
  ownerName: '林小姐',
  ownerPhone: '13800008891',
  statusText: '精力充沛 · 正在开心摇尾巴'
};

export const ALL_PETS: PetInfo[] = [
  DEFAULT_PET,
  {
    id: 'pet-2',
    name: '雪糕',
    englishName: 'Icey',
    breed: '萨摩耶',
    age: '2岁',
    weight: 21.0,
    gender: 'female',
    birthday: '2022.11.10',
    color: '雪白',
    neutered: true,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUWCL3m_1rl69xSfuQbZygEzhna5aPOBGjnkmFwWmRO28Ezxc6flq9Qggwg-_Ft9LEWtROa7YdwgebDG7mhVgZZL6-DTbudD-cYO3dlkeO0NIEVzyFgH0tY1GkvGzR3eveI9J2Jg-pVQI8VgDjqSqkCgr2pJFxFYcrO5OKlWTTF70VAMnV3A_3vX2W2uI5-B-9HhUOc7sZoT_DehdzJsLfjpuk4c4Q93wx4rdSy9SUeuesOUvqOc_7',
    chipCode: 'CHIP-9820-2022-7721',
    ownerName: '林小姐',
    ownerPhone: '13800008891',
    statusText: '爱在泥坑撒欢的小天使'
  },
  {
    id: 'pet-3',
    name: '球球',
    englishName: 'Boba',
    breed: '柯基犬',
    age: '1岁半',
    weight: 12.8,
    gender: 'male',
    birthday: '2023.03.22',
    color: '黄白双色',
    neutered: true,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtMq7t8wYcdVs4IvyxN-sV33gkI9JHymqUrPSIrssULWhyua2kk0e0IpWk_3Af9w-Sc81suKDC2Jq0oRD0gdQDxgGSQLi4MyHqaRf4Im1iyGXHwviKx3Hoz7qNiqS0HzIJ9DjKN640WSHAIDhgGVI_irvgbq2MadP6wuKranc4K6nE6SEmxL_iSTBgoV4uHeSpX_pLmfLLqXIszkVUV8_UeKhmJqpTGPitJ9wATzkIlSUaqeY4oPG1',
    chipCode: 'CHIP-9820-2023-3392',
    ownerName: '林小姐',
    ownerPhone: '13800008891',
    statusText: '小短腿电动小马达'
  }
];

export const USER_PROFILE = {
  name: '麦麦麻麻',
  title: 'LV.4 达人',
  badge: '金毛专业铲屎官 428天',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChO1zRcPaYHssJ1WHd6fXXemZLuu7DyOoHCSE0P7rFTMBPp7QvwrHaTmp7-nXhwbC89Hf7rSjGY7BlVn4xSVS-_WSbLzLxD0pZCwBL_whO-t8MWmSVMOaajGo2zq9DgK8k1tyEeCCp6o8_8c2AP471j6LUN3n-d0fKynROzXeF3QIC76K_oAgmDEI3h1JWRCWlVHL69wpp3o_UhCwIyFoEkKfHQVphakR7mfO98fNG2evHPOWFwEfK',
  points: 1280,
  coupons: 4,
  friends: 38
};

export const INITIAL_PRODUCTS: ProductItem[] = [
  {
    id: 'prod-1',
    name: '户外反光防风保暖宠物冲锋衣',
    badge: '麦麦同款',
    badgeType: 'primary',
    category: '穿戴服饰',
    subTitle: '中大型犬适配',
    sales: '月销 1200+ 件',
    price: 89.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHe4zbGVesw2LiLKHNsHE1nJ4P6kI7JKuaHuqOsZ1ChnMWSY7t9FR-o-yoDgPEbrEXqN_14ZJr2Z86IOI1M8egmD_x0VdFtx8Te8vnyfTMikHodD-0YyqfpvgZAI_IbIMtEXMCdac-ArSPUeoulYrdooUdHfQNqt7YuWtDLMRNRGOyPBeeNdqeYkwnYqxxlqslmL3wzbw4GUSdVljebChi6sCwnrZ-zzDoYjtqmptc-LyLQkL3myIK'
  },
  {
    id: 'prod-2',
    name: '极光渐变双头防爆冲反光牵引绳+胸背套',
    badge: '承重50kg',
    badgeType: 'secondary',
    category: '胸背项圈',
    subTitle: '防爆冲设计',
    sales: '月销 850+ 件',
    price: 68.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp_gZGFGHLCqA_r2kiHljocphxiC2Y-QD3K4HKl-Q_1cfZ6EUyNhYPgTvGOatOBAJeEg_M5lGK3VVjSbgCWzxSP6b3xuIoql5jY2tsdlt-UWRsWx7O7GV51xfdzdv3Pqqs3tsBgKb0BJBjwKeDWgyuqUkonO21akn5ubUrso8CFCbpvPRR2lPWzY2ACnSsKzWpr99wLaZPlVhUyyN8Uqky43JVFV5jbGHNtzUw1d33gFLThECU0XHp'
  },
  {
    id: 'prod-3',
    name: '挪威深海纯高纯度宠物鱼油胶囊',
    badge: '美毛护肤',
    badgeType: 'tertiary',
    category: '维生素营养',
    subTitle: '60粒纯高浓度',
    sales: '月销 2300+ 件',
    price: 128.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSw05HOjyWtVv0WUN5YlP5Sl7rf3bEgDxklm8DXYmLDurymr8AKrzoTXMR7dSWukEVFlXgujiNn9O-TfZ2f4BvYuWj7BzVh_0EzHGSGS6vDcL_agBFnjIgpE8RJT7gCXdZNp5Zf4K_6xKATV4nZtzTauPIIXJKDnBBZph4Ggpqord_TMKviCePpZA1NK2XOP1ow12rKiq-zcDwYzkgTndyQ0V6bQqnExat59nbBd0mJC5CV6fpCBC3'
  },
  {
    id: 'prod-4',
    name: '耐咬漏食互动飞盘玩具',
    badge: '益智耐咬',
    badgeType: 'secondary',
    category: '益智玩具',
    subTitle: '解闷神器',
    sales: '月销 3100+ 件',
    price: 35.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUL4w6HiCYxYuevJvQdyRTUGDMb9AC7702zgRqQA0bN0XnY1PJMywVkDWAdIvTXKAPXpbXWFP9D2esvjxoWvPxUigOH9SOakrxhRo4A7Riml72sAfkH0JikEPVuaeeD1-WgSZKoW6FVm4K582J4QASdeOXJ0bLiV5u1MsVYqqcSr0nCdrqiXcMwLd1YQERWW1JhApVJP79zWVoa_2EzWZEwYoXhW7jO9Y-4lq9ODfheiu3rmByxVh_'
  }
];

export const INITIAL_MEETUPS: MeetupItem[] = [
  {
    id: 'meetup-1',
    title: '🍁 金秋奥森大草坪飞盘 & 嗅闻社交派对',
    tag: '火热报名中',
    subTag: 'Weekend Special',
    tagColor: 'secondary',
    time: '本周六 14:30 - 17:30',
    location: '奥林匹克森林公园南门草坪（宠物超级友好区）',
    distance: '距你 3.2km',
    price: 39,
    features: ['专业训犬师跟队', '草坪抓拍摄影', '免费能量补给站'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBax8TzusHYaEohCl-bg7ObdPmLOuJv-xYhO5kEbEBRV6GR24s4TSXdValDetPiLIXaOKvOdTSilefdGojleTUQRZ3JovH4AXGV3tnIrT6nF8S22aatdSpTbgqjEDYkN5OJbmbxcZIhg_nLQ92X17ZUPOYk2_uJQzog6MhfUTvXgyFMtsm6YR-ocIsDTrTJsnxuUPZvrYB9mmFO5cK89ItNCM1T6mrq1oQZc_8zsls9UYkU8QCfENsc',
    joinedCount: 16,
    maxCount: 20,
    attendeeAvatars: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAq1EkOkL6YkJb63q8AF657J54xV7E823h7mr1QObRSYvzTTvd8VVQKQ0NRju5iq_BpbO_B5HawK8FzE-3IZTFxYTKjPQtEKB3roJr8fUp1-y_Q50fTO52NNRyYxF7gLG1HtyPjFZTGht5xQWrirZ-KwlmOEz3wiWfIvSU_hs4tLUQBWEze4yOv7vFbphYsYH_DAK_FBrUguHzCz2p2ztxlP81Z-1V2ZSfCQro2hh29JEOJIFMP0wsg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAV0XM-uS4Ban1D2uo6TkPUt5roEMKov5p9h5aS0y9w-E3pd--TgAXVqZG90nf2PydtNEvZ2fdZeVfpVmRzTvdDLNOA2k6bsIHtdi2-SGXKeOe12jT4sfQkIcCCTkbjRsZpTh2wOsBXncrPThgOMsXchMGq7eLbVz9r5dc19xFaw5weTQv7sq_UZ2_UNGCpE-SFVHXq80FrOIh1M5jouAzYBPP_7L3CNaR7KH1DIkH4hgmcpZY7G6Ep',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCW1Cqn2A6z5RSO8PfjHDXkILcVESOHUOsrwE-smyv9aysaelUYs7Ut8rEwwmBHjekNzSVdSiSUuJC9EXdTq4R2qnBxtBI_dZXW3YmS03F6kVCqvsNEKfjhd-jID4H-TjPM2xLXLyU4px59WUf_dUY_rmPCWnb8BGQirqAdj8pdUsdeoNrVkpE4UvuFnmAgFH7io3NwiAQljaEtuALg6Aw67AUc27jFK2GJmeTQBSJp2CwuX3D5NZlq'
    ]
  },
  {
    id: 'meetup-2',
    title: '💦 室内恒温狗狗浅滩戏水轰趴局',
    tag: '室内恒温派对',
    subTag: 'Hydro Splash Club',
    tagColor: 'tertiary',
    time: '本周日 10:00 - 12:30',
    location: '朝阳大悦城 · 萌爪水上俱乐部VIP厅',
    distance: '距你 5.8km',
    price: 68,
    features: ['专业合身救生衣', '深度吹风烘干洗护'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQ8Ur2zwgrLlxWoAk3jkoo3REqkQkgcV9XtTe0ulnrZE95jWaIMIH569nkiJg17MZeiKMzkmB0Nkp1C5LtU3HwmDPdeUsVVYEQatsRC7DHg59Q0BgBeUl7XepuUI7dkQZ-HtLpMQOO3km_wPB5yI1pUO6Wr1BIUUdXdApwox36u-rncC1AWnGjVmsUqmhE4DkDn-DRavORJUcXec1xeI3Asxopfobt6zqYyGSfBbjA7JOl4k6T7Upm',
    joinedCount: 8,
    maxCount: 12,
    attendeeAvatars: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA7msmTyn8612vqdpuL_8-3NrzWASkyqlSYFEGEQgTwU8-n4ufsGX94h7NILfdhq71LZsmEj5MFljCXji1i0aZ-Kuq6DjB6IcK3fCogrK1eDFSorCnwHhsoS9PLVIiTluTcHBFLcZjD1fbb3CpaLxbcn8DRZIULUnzxwyNihELQtG1COd1id-mYs5WXVq4rnuPmiQdnBtF_ywtVVX_JL0N5yHGnv_u3net8oLkUweJNj8CN2auDHofc',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC5LJ-Jw6QyWNaVpE2ZYqwJnbLSCv-SAshn1u9N36oAScpK2HX8BhlFjb-8z4IliJs4sCcpW90-L9h4Vxt8i2LjESGyc6KXNGbk6eg5Q6JQiSWBwB6s-4dRl8kV7CqyCAuVGBmMNTPKzfmfjnGtvMa4Y45JlhS5oAACFVsOycv7T2wm9eWw39SY5KMX2n9jT5XhcYDScejJyfl6aYiTkwuak1vz8MNZk-Aji3qsrxsU8dNJJPWL4fyY'
    ]
  }
];

export const INITIAL_PHOTO_FEEDS: PhotoFeedItem[] = [
  {
    id: 'feed-1',
    author: '球球麻麻',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8wc0G9-68yejqp7TaFP_zNvkoBJhqV0oTmVJfdyzMbwJuIR_bedKkU9kfF-B7-9CFY4MbUP_Ydx3cT7YK-Moc6DoMvWCkacX1zOzJuly09vjW6wJTwpEKt6wgocaQO0uXU39IyOA8RKHPnefX7n8TBYsMJTKcPaZ2oXhsd15nlKvRSX6rj7Kc5Ynl3UznLCQ-w6liab3ap52iQ9o79SQEmbbTraz8oghkGZ0lpbXI-dZCqyVS17U7',
    location: '朝阳公园',
    content: '今日秋冬小熊毛衣穿搭打卡 🧸 尾巴摇成了小螺旋桨！',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtMq7t8wYcdVs4IvyxN-sV33gkI9JHymqUrPSIrssULWhyua2kk0e0IpWk_3Af9w-Sc81suKDC2Jq0oRD0gdQDxgGSQLi4MyHqaRf4Im1iyGXHwviKx3Hoz7qNiqS0HzIJ9DjKN640WSHAIDhgGVI_irvgbq2MadP6wuKranc4K6nE6SEmxL_iSTBgoV4uHeSpX_pLmfLLqXIszkVUV8_UeKhmJqpTGPitJ9wATzkIlSUaqeY4oPG1',
    likes: 128,
    isLiked: false
  },
  {
    id: 'feed-2',
    author: '雪糕本糕',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACbFDt4yPMuRl5ViEIsNvPr3KVddsFTLo0CWK2CkW30rIYSH7e0sBBhkI10_Xmjhg-UvJ8mTNUgSohIDi5Lz9uYaev73OENjW9mJT-G0anv3nv3X1QmprT0kKVF-yJU-3J5FQ_PDVp7sB2kqsMQurOQDHkqTd6Rlno7B-5kk30D1mp23ybQNXTx848EUo3-DfCzUMIW_sljxUbEtIXKycmq-mmZSKmekR8lONnPMxFbEzcX0NcuXp7',
    location: '洗香香进行中',
    content: '泥坑撒欢后的大型洗澡现场 🛁 洗出来的水像奶茶...',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUWCL3m_1rl69xSfuQbZygEzhna5aPOBGjnkmFwWmRO28Ezxc6flq9Qggwg-_Ft9LEWtROa7YdwgebDG7mhVgZZL6-DTbudD-cYO3dlkeO0NIEVzyFgH0tY1GkvGzR3eveI9J2Jg-pVQI8VgDjqSqkCgr2pJFxFYcrO5OKlWTTF70VAMnV3A_3vX2W2uI5-B-9HhUOc7sZoT_DehdzJsLfjpuk4c4Q93wx4rdSy9SUeuesOUvqOc_7',
    likes: 342,
    isLiked: false,
    comments: 45
  },
  {
    id: 'feed-3',
    author: '麦麦冲鸭',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxJTqcUneBFHMEynzXkPAVUz4pcmu9bF7tlruD32yd4xTNGvEFunkl5gjQ7bZEVfYDFESW1gOj894SNx-FITE79wG1cqwyI8-jjikv84zxLaX9LREEawE81dwBq_8hgVbXM5dbK2gnCnWX8x6HpNsBMTNhx_QYW2GqPyOBSTqWSvD1Vm322AloW_MW_oNBTkLtmL1khTikgNv4KDegnrLPiE3K-n9jglbBO1JokCVb57IZIEmtdsHu',
    location: '温榆河湿地',
    tag: '高清连拍',
    content: '公园飞盘帅气抓拍时刻 🥏 滞空两秒帅出天际！',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0_xxLSvTDernBSyJorjnab-hs8rX5ULNnrDB4gV7T3Y6D18nE_MhwKqzMVWca03XVOojFUNLIkhPgOwRfGjksR7qur0ZfnCJdQNuH-0gPPSmu1f_uzlbDCF4xc45SR2cXtNqAFhseOTUMabdHc62Ur3A7JUv8Mwux1NS488Q8wKTNKiVjhYW70MWj_WxFrguwStyvGWVJLg9fWKDkeqE46Q9QCnwvmzminwyUQtpt4eJ7_kaBIn9x',
    likes: 289,
    isLiked: false
  }
];

export const INITIAL_SUPPLEMENTS: SupplementItem[] = [
  {
    id: 'supp-1',
    name: '深海鱼油 Omega-3',
    tag: '维持亮泽被毛',
    tagColor: 'tertiary',
    instructions: '每日随早饭 1 粒 (1000mg)',
    checked: true,
    icon: 'set_meal'
  },
  {
    id: 'supp-2',
    name: '复合维生素 B 族',
    tag: '增强免疫皮肤屏障',
    tagColor: 'secondary',
    instructions: '隔日 1 片 · 随晚饭喂服',
    checked: true,
    icon: 'medication'
  },
  {
    id: 'supp-3',
    name: '金品关节软骨素',
    tag: '保护大型犬髋关节',
    tagColor: 'primary',
    instructions: '每周 3 次 · 今日已进食',
    checked: true,
    icon: 'format_h4'
  }
];
