(function(){

window.RUI={};
    
$(function () {

    var recommendTrackingCode = "?s-id=RECOM_Event&l-id=Event-weekend141024-RECOM-B",
        footprintTrackingCode = "?f-id=FOOTPRINTS_Event&s-id=Event-weekend141024-FOOTPRINTS-B",
        getFootprint = function (callback) {
            var footprinturl = "http://ws.rakuten.com.tw/footprints/rest/1.0/json/list/get?c=footprintCallback";
            window.footprintCallback = function (fpdata) {

                var h = fpdata.items;
                
                
                //change img size
                for(var i=0;i<h.length;i++){
                    h[i].img=String(h[i].img).replace("thumb64","thumb100");
                    //console.log(h[i].img);
                }
                
                
                if (h.length === 0) {

                } else {

                    callback(h);
                }

            };

            $.ajax({
                type: "get",
                dataType: 'jsonp',
                url: footprinturl,
                timeout: 5000,
                jsonp: "callback",
                success: window.footprintCallback
            });

            //loadScripts([footprinturl], window.footprintCallback);


        },
        formatCarouselItems = function (data, countPerSlide) {
            var totalCount = data.length,
                slideCount = totalCount % countPerSlide === 0 ? totalCount / countPerSlide : parseInt(totalCount / countPerSlide) + 1,
                currentIndex = 0,
                formatedItems = [];

            for (var i = 0; i < slideCount; i++) {
                var slide = [];
                for (var j = 0; j < countPerSlide; j++) {
                    if (data[currentIndex]) {
                        slide[j] = {
                            "data": data[currentIndex]
                        };
                    }
                    currentIndex = currentIndex + 1;

                }
                formatedItems.push({
                    "slide": slide
                });


            }

            return {
                items: formatedItems
            };



        },
        getRecommendId = function (pageurl) {
            return pageurl.split("/")[2].split(".")[0] + "@" + pageurl.split("/")[3].replace(/\s+/g, "");
        },
        formatItemName = function (name) {
            if (name !== null && name !== undefined && name.length > 25) {
                return name.substring(0, 25) + "...";
            } else {
                return name;
            }
        },
        getRecommendations = function (id, shopid, callback) {
            var recommendapiurl = "http://grp01.api.rp.rakuten.co.jp/view?project=recommend_taiwan&api=recommenderHybrid&service_id=06-00-000-000&recType=goten2.basket:goten2browsing.basket:mlt&q=id:" + id + "&wt=json&fl=id,title,img,url,price,available&mlt.fl=title&mlt.mintf=0&rows=30&hybrid.meta=off&fq=-available%253A(%252B0)";

            $.ajax({
                type: "get",
                dataType: 'jsonp',
                url: recommendapiurl,
                timeout: 5000,
                jsonp: "callback",
                success: function (data) {
                   
                    var response = data.response;
                    var resultnum = response.numFound;
                    if (resultnum > 0) {
                        var results = response.docs;
                        var items = [];
                        for (var i = 0, k = results.length; i < k; i++) {
                            var item = {};
                            item.name = formatItemName(results[i].title);
                            item.did = results[i].id;
                            item.price = results[i].price;
                            if (results[i].img !== null && results[i].img !== undefined && results[i].img !== "") {
                                item.img = String(results[i].img).replace("thumb200","thumb100");
                            } else {
                                item.img = "http://c.tw.rakuten-static.com/front/common/img/thumb_no_image_128x128.jpg";
                            }
                            item.uri = results[i].url;
                            item.type = "0";
                            item.sname = results[i].id.split("@")[0];
                            item.sid = results[i].id.split("@")[0];
                            item.surl = "http://" + results[i].id.split("@")[0] + ".shop.rakuten.tw";
                            items.push(item);
                        }
                        //                        recommendItems=items;
                        //renderRecommendations(items);
                        if (items.length > 0) {
                            callback(items);
                        }


                    } else {

                        if (window.console && window.console.log) {
                            console.log("no recommend items");
                        }

                        callback(null);
                    }
                },
                error: function () {
                    if (window.console && window.console.log) {
                        console.log("getRecommendations error");
                    }
                    callback(null);

                }
            });


        };


    getFootprint(function (footprintItems) {

        var latestItem = footprintItems[0],
            items = formatCarouselItems(footprintItems, 5);

        //items.trackingCode=footprintTrackingCode;

        if (items.length === 0) {
            $(".footprintSection").remove();
            return;
        }

        var source = $("#carouselItemTemplate").html(),
            template = Handlebars.compile(source);

        $("#history-carousel .b-carousel-inner").append(template(items));
        $('#history-carousel').horizontalCarousel();


        $('#history-carousel').find("a").each(function () {
            $(this).attr("href", $(this).attr("href") + footprintTrackingCode);

        });

        getRecommendations(getRecommendId(latestItem.uri), {}, function (data) {

            var items = formatCarouselItems(data, 5),

                source = $("#carouselItemTemplate").html(),
                template = Handlebars.compile(source);

            //items.trackingCode=recommendTrackingCode;


            if (items.length === 0) {
                $(".recommendSection").remove();
                return;
            }

            $("#recommendation-carousel .b-carousel-inner").append(template(items));
            $('#recommendation-carousel').horizontalCarousel();

            $('#recommendation-carousel').find("a").each(function () {
                $(this).attr("href", $(this).attr("href") + recommendTrackingCode);

            });

        });


    });




});

}())