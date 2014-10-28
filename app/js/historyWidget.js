(function () {

    if (window.RUI === undefined) {
        window.RUI = {};
    }

    var historyWidget = (function () {

            return {

                launch: function () {
                    return components.contentArea.launch();
                },
                getComponents: function () {

                    return components;
                }

            };


        }()),
        createTemplate = function (param) {
            var mainNode = param.mainNode,
                content = param.content,
                className = param.className,
                docFrag = document.createDocumentFragment(),
                template = document.createElement(mainNode);

            template.className = className;
            template.innerHTML = content;
            docFrag.appendChild(template);

            return template;

        },
        components = {};
    
    components.contentArea=(function(){
    
    
        var template = createTemplate({
                mainNode: "ul",
                className: "contentArea",
                content: '<li><div class="img"><a title="《專利時尚矽膠鞋帶》-戲鞋帶-" 2盒組"《免運》《運動專用、帆布鞋的好朋友》"="" href="http://rchvi.shop.rakuten.tw/200000003841632/?f-id=FOOTPRINTS_TOPA"><img src="http://thumb.tw.rakuten-static.com/rchvi/thumb64/02A/aa004.jpg" alt="《專利時尚矽膠鞋帶》-戲鞋帶-" 2盒組"《免運》《運動專用、帆布鞋的好朋友》"=""></a></div><a class="txt" title="《專利時尚矽膠鞋帶》-戲鞋帶-" 2盒組"《免運》《運動專用、帆布鞋的好朋友》"="" href="http://rchvi.shop.rakuten.tw/200000003841632/?f-id=FOOTPRINTS_TOPA">《專利時尚矽膠鞋帶》-戲鞋帶-"2盒組"《免運》《運動專用、帆布鞋的好朋友》</a></li><li><div class="img"><a title="【FUN地球】5吋粉色系粉紫色糖果盒地球儀(英文版)(CC05-P3)" href="http://funglobe.shop.rakuten.tw/200000003812259/?f-id=FOOTPRINTS_TOPA"><img src="http://thumb.tw.rakuten-static.com/funglobe/thumb64/IMG_7234-2.jpg" alt="【FUN地球】5吋粉色系粉紫色糖果盒地球儀(英文版)(CC05-P3)"></a></div><a class="txt" title="【FUN地球】5吋粉色系粉紫色糖果盒地球儀(英文版)(CC05-P3)" href="http://funglobe.shop.rakuten.tw/200000003812259/?f-id=FOOTPRINTS_TOPA">【FUN地球】5吋粉色系粉紫色糖果盒地球儀(英文版)(CC05-P3)</a></li><li><div class="img"><a title="PS Mall╭＊韓版防水雙拉式多功能收納包 包中包  文具袋 化妝包 旅行袋 雜物袋 物件袋【J597】" href="http://psmall.shop.rakuten.tw/200000001375186/?f-id=FOOTPRINTS_TOPA"><img src="http://thumb.tw.rakuten-static.com/psmall/thumb64/j597-44.jpg" alt="PS Mall╭＊韓版防水雙拉式多功能收納包 包中包  文具袋 化妝包 旅行袋 雜物袋 物件袋【J597】"></a></div><a class="txt" title="PS Mall╭＊韓版防水雙拉式多功能收納包 包中包  文具袋 化妝包 旅行袋 雜物袋 物件袋【J597】" href="http://psmall.shop.rakuten.tw/200000001375186/?f-id=FOOTPRINTS_TOPA">PS Mall╭＊韓版防水雙拉式多功能收納包 包中包  文具袋 化妝包 旅行袋 雜物袋 物件袋【J597】</a></li><li><div class="img"><a title="樂天 SuperFashionWeek 限定！10/27 ▶ 11/03 09:59am 買『6吋酥波蘿蘭姆葡萄重乳酪蛋糕』就送『手工乳酪球』當酒釀蘭姆葡萄遇上香濃奶酥的酥脆口感，無法抗拒的夢幻滋味！" href="http://double-s.shop.rakuten.tw/200000003840169/?f-id=FOOTPRINTS_TOPA"><img src="http://thumb.tw.rakuten-static.com/double-s/thumb64/500/suio12.jpg" alt="樂天 SuperFashionWeek 限定！10/27 ▶ 11/03 09:59am 買『6吋酥波蘿蘭姆葡萄重乳酪蛋糕』就送『手工乳酪球』當酒釀蘭姆葡萄遇上香濃奶酥的酥脆口感，無法抗拒的夢幻滋味！"></a></div><a class="txt" title="樂天 SuperFashionWeek 限定！10/27 ▶ 11/03 09:59am 買『6吋酥波蘿蘭姆葡萄重乳酪蛋糕』就送『手工乳酪球』當酒釀蘭姆葡萄遇上香濃奶酥的酥脆口感，無法抗拒的夢幻滋味！" href="http://double-s.shop.rakuten.tw/200000003840169/?f-id=FOOTPRINTS_TOPA">樂天 SuperFashionWeek 限定！10/27 ▶ 11/03 09:59am 買『6吋酥波蘿蘭姆葡萄重乳酪蛋糕』就送『手工乳酪球』當酒釀蘭姆葡萄遇上香濃奶酥的酥脆口感，無法抗拒的夢幻滋味！</a></li><li><div class="img"><a title="【拿破崙先生】超人氣！火腿起酥三明治２條免運組♥限時優惠中♥店長超推薦：使用電鍋不加水蒸烤回魂火腿起酥三明治，就像剛出爐的無敵美味~起酥的香濃蔓延在空氣中！☆排行榜冠軍★11/3 AM9:59前，兩條限時↘379免運→買再送：鮮奶布蕾塔1個" href="http://mr-napoleon.shop.rakuten.tw/bread_ham/?f-id=FOOTPRINTS_TOPA"><img src="http://thumb.tw.rakuten-static.com/mr-napoleon/thumb64/20141027-3.jpg" alt="【拿破崙先生】超人氣！火腿起酥三明治２條免運組♥限時優惠中♥店長超推薦：使用電鍋不加水蒸烤回魂火腿起酥三明治，就像剛出爐的無敵美味~起酥的香濃蔓延在空氣中！☆排行榜冠軍★11/3 AM9:59前，兩條限時↘379免運→買再送：鮮奶布蕾塔1個"></a></div><a class="txt" title="【拿破崙先生】超人氣！火腿起酥三明治２條免運組♥限時優惠中♥店長超推薦：使用電鍋不加水蒸烤回魂火腿起酥三明治，就像剛出爐的無敵美味~起酥的香濃蔓延在空氣中！☆排行榜冠軍★11/3 AM9:59前，兩條限時↘379免運→買再送：鮮奶布蕾塔1個" href="http://mr-napoleon.shop.rakuten.tw/bread_ham/?f-id=FOOTPRINTS_TOPA">【拿破崙先生】超人氣！火腿起酥三明治２條免運組♥限時優惠中♥店長超推薦：使用電鍋不加水蒸烤回魂火腿起酥三明治，就像剛出爐的無敵美味~起酥的香濃蔓延在空氣中！☆排行榜冠軍★11/3 AM9:59前，兩條限時↘379免運→買再送：鮮奶布蕾塔1個</a></li><li><div class="img"><a title="【秋冬↘2折起】H2O-純色可愛排扣短褲(綠色)" href="http://h2o.shop.rakuten.tw/3652041-04/?f-id=FOOTPRINTS_TOPA"><img src="http://thumb.tw.rakuten-static.com/h2o/thumb64/3652041-04-400.jpg" alt="【秋冬↘2折起】H2O-純色可愛排扣短褲(綠色)"></a></div><a class="txt" title="【秋冬↘2折起】H2O-純色可愛排扣短褲(綠色)" href="http://h2o.shop.rakuten.tw/3652041-04/?f-id=FOOTPRINTS_TOPA">【秋冬↘2折起】H2O-純色可愛排扣短褲(綠色)</a></li><li><div class="img"><a title="長袖兔裝 蜜蜂 瓢蟲造型單層搖粒絨長袖連身衣CA2539" href="http://howowo.shop.rakuten.tw/140253-9/?f-id=FOOTPRINTS_TOPA"><img src="http://thumb.tw.rakuten-static.com/howowo/thumb64/140253-9a.jpg" alt="長袖兔裝 蜜蜂 瓢蟲造型單層搖粒絨長袖連身衣CA2539"></a></div><a class="txt" title="長袖兔裝 蜜蜂 瓢蟲造型單層搖粒絨長袖連身衣CA2539" href="http://howowo.shop.rakuten.tw/140253-9/?f-id=FOOTPRINTS_TOPA">長袖兔裝 蜜蜂 瓢蟲造型單層搖粒絨長袖連身衣CA2539</a></li><li><div class="img"><a title="【御和堂】台灣茶-Taiwan tea 日月潭紅茶★歡樂購-3罐999元★(台茶18號)手採紅茶，似果似花而似蜜；滋味鮮濃醇爽；讓世界紅茶專家讚賞紅玉紅茶的香氣為「臺灣香」。" href="http://teamap888.shop.rakuten.tw/200000003811148/?f-id=FOOTPRINTS_TOPA"><img src="http://thumb.tw.rakuten-static.com/teamap888/thumb64/500/0640999.jpg" alt="【御和堂】台灣茶-Taiwan tea 日月潭紅茶★歡樂購-3罐999元★(台茶18號)手採紅茶，似果似花而似蜜；滋味鮮濃醇爽；讓世界紅茶專家讚賞紅玉紅茶的香氣為「臺灣香」。"></a></div><a class="txt" title="【御和堂】台灣茶-Taiwan tea 日月潭紅茶★歡樂購-3罐999元★(台茶18號)手採紅茶，似果似花而似蜜；滋味鮮濃醇爽；讓世界紅茶專家讚賞紅玉紅茶的香氣為「臺灣香」。" href="http://teamap888.shop.rakuten.tw/200000003811148/?f-id=FOOTPRINTS_TOPA">【御和堂】台灣茶-Taiwan tea 日月潭紅茶★歡樂購-3罐999元★(台茶18號)手採紅茶，似果似花而似蜜；滋味鮮濃醇爽；讓世界紅茶專家讚賞紅玉紅茶的香氣為「臺灣香」。</a></li><li><div class="img"><a title="蝴蝶結與俏鬍子長袖棉T親子裝情侶裝(小孩)" href="http://isearchdesign.shop.rakuten.tw/200000003789756/?f-id=FOOTPRINTS_TOPA"><img src="http://thumb.tw.rakuten-static.com/isearchdesign/thumb64/JJhouse/QZ97_300.jpg" alt="蝴蝶結與俏鬍子長袖棉T親子裝情侶裝(小孩)"></a></div><a class="txt" title="蝴蝶結與俏鬍子長袖棉T親子裝情侶裝(小孩)" href="http://isearchdesign.shop.rakuten.tw/200000003789756/?f-id=FOOTPRINTS_TOPA">蝴蝶結與俏鬍子長袖棉T親子裝情侶裝(小孩)</a></li><li><div class="img"><a title="【ikloo】多功能升降調整電腦桌" href="http://ikloo.shop.rakuten.tw/200000003818269/?f-id=FOOTPRINTS_TOPA"><img src="http://thumb.tw.rakuten-static.com/ikloo/thumb64/FC68/_sE_2625333830.jpg" alt="【ikloo】多功能升降調整電腦桌"></a></div><a class="txt" title="【ikloo】多功能升降調整電腦桌" href="http://ikloo.shop.rakuten.tw/200000003818269/?f-id=FOOTPRINTS_TOPA">【ikloo】多功能升降調整電腦桌</a></li><li><div class="img"><a title="【3M】Thinsulate可水洗四季被Z250 雙人(6x7)" href="http://line3c.shop.rakuten.tw/200000003136961/?f-id=FOOTPRINTS_TOPA"><img src="http://thumb.tw.rakuten-static.com/line3c/thumb64/3M-7000027681/a500.jpg" alt="【3M】Thinsulate可水洗四季被Z250 雙人(6x7)"></a></div><a class="txt" title="【3M】Thinsulate可水洗四季被Z250 雙人(6x7)" href="http://line3c.shop.rakuten.tw/200000003136961/?f-id=FOOTPRINTS_TOPA">【3M】Thinsulate可水洗四季被Z250 雙人(6x7)</a></li><li><div class="img"><a title="聯發科真八核心\Cherry\ 酷似S5外型 \ 5吋HD屏\ 2+16G雙卡智慧型手機" href="http://cherrymobile.shop.rakuten.tw/200000003317286/?f-id=FOOTPRINTS_TOPA"><img src="http://thumb.tw.rakuten-static.com/cherrymobile/thumb64/Cherry6592.JPG" alt="聯發科真八核心\Cherry\ 酷似S5外型 \ 5吋HD屏\ 2+16G雙卡智慧型手機"></a></div><a class="txt" title="聯發科真八核心\Cherry\ 酷似S5外型 \ 5吋HD屏\ 2+16G雙卡智慧型手機" href="http://cherrymobile.shop.rakuten.tw/200000003317286/?f-id=FOOTPRINTS_TOPA">聯發科真八核心\Cherry\ 酷似S5外型 \ 5吋HD屏\ 2+16G雙卡智慧型手機</a></li><li><div class="img"><a title="☆傑媽童裝☆LBB灰色海軍純棉毛圈帽T套裝(41775)" href="http://mamababy713.shop.rakuten.tw/200000003767588/?f-id=FOOTPRINTS_TOPA"><img src="http://thumb.tw.rakuten-static.com/mamababy713/thumb64/201409/41775.jpg" alt="☆傑媽童裝☆LBB灰色海軍純棉毛圈帽T套裝(41775)"></a></div><a class="txt" title="☆傑媽童裝☆LBB灰色海軍純棉毛圈帽T套裝(41775)" href="http://mamababy713.shop.rakuten.tw/200000003767588/?f-id=FOOTPRINTS_TOPA">☆傑媽童裝☆LBB灰色海軍純棉毛圈帽T套裝(41775)</a></li><li><div class="img"><a title="DOLO喇叭" href="http://3c168.shop.rakuten.tw/200000003732078/?f-id=FOOTPRINTS_TOPA"><img src="" alt="DOLO喇叭"></a></div><a class="txt" title="DOLO喇叭" href="http://3c168.shop.rakuten.tw/200000003732078/?f-id=FOOTPRINTS_TOPA">DOLO喇叭</a></li><li><div class="img"><a title="Logitech 羅技 UE 行動音樂 藍芽技術 串流撥放 UE Mobile Boombox 無線音箱" href="http://shinehaw.shop.rakuten.tw/200000003834412/?f-id=FOOTPRINTS_TOPA"><img src="http://thumb.tw.rakuten-static.com/shinehaw/thumb64/UE-MUSIC/mobile/MB-300.jpg" alt="Logitech 羅技 UE 行動音樂 藍芽技術 串流撥放 UE Mobile Boombox 無線音箱"></a></div><a class="txt" title="Logitech 羅技 UE 行動音樂 藍芽技術 串流撥放 UE Mobile Boombox 無線音箱" href="http://shinehaw.shop.rakuten.tw/200000003834412/?f-id=FOOTPRINTS_TOPA">Logitech 羅技 UE 行動音樂 藍芽技術 串流撥放 UE Mobile Boombox 無線音箱</a></li><li><div class="img"><a title="女孩兒新寵兒♥手機補妝小物  RETOUCH 粉餅口紅系列組 手機行動電源 4200mAh+2600mAh" href="http://shinehaw.shop.rakuten.tw/200000003860932/?f-id=FOOTPRINTS_TOPA"><img src="http://thumb.tw.rakuten-static.com/shinehaw/thumb64/BOOM/makeup/ML.jpg" alt="女孩兒新寵兒♥手機補妝小物  RETOUCH 粉餅口紅系列組 手機行動電源 4200mAh+2600mAh"></a></div><a class="txt" title="女孩兒新寵兒♥手機補妝小物  RETOUCH 粉餅口紅系列組 手機行動電源 4200mAh+2600mAh" href="http://shinehaw.shop.rakuten.tw/200000003860932/?f-id=FOOTPRINTS_TOPA">女孩兒新寵兒♥手機補妝小物  RETOUCH 粉餅口紅系列組 手機行動電源 4200mAh+2600mAh</a></li><li><div class="img"><a title="【t09206bl4】【心機美人】Anymore 水袋爆乳挺胸集中內衣A-D (氣質黑)" href="http://anymore.shop.rakuten.tw/t09206bl4/?f-id=FOOTPRINTS_TOPA"><img src="http://thumb.tw.rakuten-static.com/anymore/thumb64/2014AM/09206BL4-600.jpg" alt="【t09206bl4】【心機美人】Anymore 水袋爆乳挺胸集中內衣A-D (氣質黑)"></a></div><a class="txt" title="【t09206bl4】【心機美人】Anymore 水袋爆乳挺胸集中內衣A-D (氣質黑)" href="http://anymore.shop.rakuten.tw/t09206bl4/?f-id=FOOTPRINTS_TOPA">【t09206bl4】【心機美人】Anymore 水袋爆乳挺胸集中內衣A-D (氣質黑)</a></li><li><div class="img"><a title="消費滿$1000抵$100★LOQI 春捲包 鋸齒形多重顏色" href="http://brand-ave.shop.rakuten.tw/lo01c0026mu/?f-id=FOOTPRINTS_TOPA"><img src="http://thumb.tw.rakuten-static.com/brand-ave/thumb64/Accessories/LOQI/LO01C0026MU_1.jpg" alt="消費滿$1000抵$100★LOQI 春捲包 鋸齒形多重顏色"></a></div><a class="txt" title="消費滿$1000抵$100★LOQI 春捲包 鋸齒形多重顏色" href="http://brand-ave.shop.rakuten.tw/lo01c0026mu/?f-id=FOOTPRINTS_TOPA">消費滿$1000抵$100★LOQI 春捲包 鋸齒形多重顏色</a></li><li><div class="img"><a title="消費滿$1000抵$100★LOQI 春捲包 山姆茱兒 多重顏色" href="http://brand-ave.shop.rakuten.tw/lo01c0015mu/?f-id=FOOTPRINTS_TOPA"><img src="http://thumb.tw.rakuten-static.com/brand-ave/thumb64/Accessories/LOQI/LO01C0015MU_1.jpg" alt="消費滿$1000抵$100★LOQI 春捲包 山姆茱兒 多重顏色"></a></div><a class="txt" title="消費滿$1000抵$100★LOQI 春捲包 山姆茱兒 多重顏色" href="http://brand-ave.shop.rakuten.tw/lo01c0015mu/?f-id=FOOTPRINTS_TOPA">消費滿$1000抵$100★LOQI 春捲包 山姆茱兒 多重顏色</a></li><li><div class="img"><a title="消費滿$1000抵$100★LOQI 春捲包 積木多重顏色" href="http://brand-ave.shop.rakuten.tw/lo01c0007mu/?f-id=FOOTPRINTS_TOPA"><img src="http://thumb.tw.rakuten-static.com/brand-ave/thumb64/Accessories/LOQI/LO01C0007MU_1.jpg" alt="消費滿$1000抵$100★LOQI 春捲包 積木多重顏色"></a></div><a class="txt" title="消費滿$1000抵$100★LOQI 春捲包 積木多重顏色" href="http://brand-ave.shop.rakuten.tw/lo01c0007mu/?f-id=FOOTPRINTS_TOPA">消費滿$1000抵$100★LOQI 春捲包 積木多重顏色</a></li><li><div class="img"><a title="消費滿$1000抵$100★LOQI 春捲包 蘿拉多重顏色" href="http://brand-ave.shop.rakuten.tw/lo01c0014mu/?f-id=FOOTPRINTS_TOPA"><img src="http://thumb.tw.rakuten-static.com/brand-ave/thumb64/Accessories/LOQI/LO01C0014MU_1.jpg" alt="消費滿$1000抵$100★LOQI 春捲包 蘿拉多重顏色"></a></div><a class="txt" title="消費滿$1000抵$100★LOQI 春捲包 蘿拉多重顏色" href="http://brand-ave.shop.rakuten.tw/lo01c0014mu/?f-id=FOOTPRINTS_TOPA">消費滿$1000抵$100★LOQI 春捲包 蘿拉多重顏色</a></li><li><div class="img"><a title="[分類頁]潮流男性-橫幅Banner" href="http://twr-ad.shop.rakuten.tw/c1410_men_b01/?f-id=FOOTPRINTS_TOPA"><img src="http://thumb.tw.rakuten-static.com/twr-ad/thumb64/mens/101221_men_b_510x63.jpg" alt="[分類頁]潮流男性-橫幅Banner"></a></div><a class="txt" title="[分類頁]潮流男性-橫幅Banner" href="http://twr-ad.shop.rakuten.tw/c1410_men_b01/?f-id=FOOTPRINTS_TOPA">[分類頁]潮流男性-橫幅Banner</a></li><li><div class="img"><a title="[分類頁]女性時尚-流行女裝-橫幅Banner(輪播)" href="http://twr-ad.shop.rakuten.tw/c1410_lady_fb1/?f-id=FOOTPRINTS_TOPA"><img src="http://thumb.tw.rakuten-static.com/twr-ad/thumb64/lady/lady_01_10.jpg" alt="[分類頁]女性時尚-流行女裝-橫幅Banner(輪播)"></a></div><a class="txt" title="[分類頁]女性時尚-流行女裝-橫幅Banner(輪播)" href="http://twr-ad.shop.rakuten.tw/c1410_lady_fb1/?f-id=FOOTPRINTS_TOPA">[分類頁]女性時尚-流行女裝-橫幅Banner(輪播)</a></li><li><div class="img"><a title="[分類頁]女性時尚-名模伸展台" href="http://twr-ad.shop.rakuten.tw/c1410_lady_f08/?f-id=FOOTPRINTS_TOPA"><img src="http://thumb.tw.rakuten-static.com/twr-ad/thumb64/lady/lady_01_06.jpg" alt="[分類頁]女性時尚-名模伸展台"></a></div><a class="txt" title="[分類頁]女性時尚-名模伸展台" href="http://twr-ad.shop.rakuten.tw/c1410_lady_f08/?f-id=FOOTPRINTS_TOPA">[分類頁]女性時尚-名模伸展台</a></li><li><div class="img"><a title="[首頁]潮流情報" href="http://twr-ad.shop.rakuten.tw/t1410_top_27/?f-id=FOOTPRINTS_TOPA"><img src="http://thumb.tw.rakuten-static.com/twr-ad/thumb64/top/fashion01_01.png" alt="[首頁]潮流情報"></a></div><a class="txt" title="[首頁]潮流情報" href="http://twr-ad.shop.rakuten.tw/t1410_top_27/?f-id=FOOTPRINTS_TOPA">[首頁]潮流情報</a></li><li><div class="img"><a title="[FB]樂天市場FB訊息" href="http://twr-ad.shop.rakuten.tw/o1410_out_03/?f-id=FOOTPRINTS_TOPA"><img src="http://thumb.tw.rakuten-static.com/twr-ad/thumb64/fb/fb_ra01.jpg" alt="[FB]樂天市場FB訊息"></a></div><a class="txt" title="[FB]樂天市場FB訊息" href="http://twr-ad.shop.rakuten.tw/o1410_out_03/?f-id=FOOTPRINTS_TOPA">[FB]樂天市場FB訊息</a></li><li><div class="img"><a title="[分類頁]樂天誌-Tbar" href="http://twr-ad.shop.rakuten.tw/m1410_maz_02/?f-id=FOOTPRINTS_TOPA"><img src="http://thumb.tw.rakuten-static.com/twr-ad/thumb64/mag/mag_01_02.jpg" alt="[分類頁]樂天誌-Tbar"></a></div><a class="txt" title="[分類頁]樂天誌-Tbar" href="http://twr-ad.shop.rakuten.tw/m1410_maz_02/?f-id=FOOTPRINTS_TOPA">[分類頁]樂天誌-Tbar</a></li><li><div class="img"><a title="[分類頁]樂天誌-輪播大看板" href="http://twr-ad.shop.rakuten.tw/m1410_maz_01/?f-id=FOOTPRINTS_TOPA"><img src="http://thumb.tw.rakuten-static.com/twr-ad/thumb64/mag/mag_01_01.jpg" alt="[分類頁]樂天誌-輪播大看板"></a></div><a class="txt" title="[分類頁]樂天誌-輪播大看板" href="http://twr-ad.shop.rakuten.tw/m1410_maz_01/?f-id=FOOTPRINTS_TOPA">[分類頁]樂天誌-輪播大看板</a></li><li><div class="img"><a title="[分類頁]人氣特色市場-每日一店" href="http://twr-ad.shop.rakuten.tw/c1410_mart_01/?f-id=FOOTPRINTS_TOPA"><img src="http://thumb.tw.rakuten-static.com/twr-ad/thumb64/IchibaSpecial/IchibaSpecial_01_01.png" alt="[分類頁]人氣特色市場-每日一店"></a></div><a class="txt" title="[分類頁]人氣特色市場-每日一店" href="http://twr-ad.shop.rakuten.tw/c1410_mart_01/?f-id=FOOTPRINTS_TOPA">[分類頁]人氣特色市場-每日一店</a></li><li><div class="img"><a title="[分類頁]女性時尚-女性內衣/睡衣-熱門主打" href="http://twr-ad.shop.rakuten.tw/c1410_lady_f27/?f-id=FOOTPRINTS_TOPA"><img src="http://thumb.tw.rakuten-static.com/twr-ad/thumb64/other/lady_f27.jpg" alt="[分類頁]女性時尚-女性內衣/睡衣-熱門主打"></a></div><a class="txt" title="[分類頁]女性時尚-女性內衣/睡衣-熱門主打" href="http://twr-ad.shop.rakuten.tw/c1410_lady_f27/?f-id=FOOTPRINTS_TOPA">[分類頁]女性時尚-女性內衣/睡衣-熱門主打</a></li>'
        });
        return {
        
            launch:function(){
            
                return template;
            }
        
        };
        
    
    }());


    window.RUI.historyWidget=historyWidget;



}());