var dataCitys = {
    "0": ["北京市", "天津市", "上海市", "重庆市", "河北省", "山西省", "内蒙古", "辽宁省", "吉林省", "黑龙江省", "江苏省", "浙江省", "安徽省", "福建省", "江西省", "山东省", "河南省", "湖北省", "湖南省", "广东省", "广西省", "海南省", "四川省", "贵州省", "云南省", "西藏", "陕西省", "甘肃省", "青海省", "宁夏省", "新疆", "香港", "澳门", "台湾", "其它国家及地区"],

    "0_0": ["北京市"],
    "0_1": ["天津市"],
    "0_2": ["上海市"],
    "0_3": ["重庆市"],
    "0_4": ["石家庄市", "张家口市", "承德市", "秦皇岛市", "唐山市", "廊坊市", "保定市", "衡水市", "沧州市", "邢台市", "邯郸市"],
    "0_5": ["太原市", "朔州市", "大同市", "阳泉市", "长治市", "晋城市", "忻州市", "晋中市", "临汾市", "吕梁市", "运城市"],
    "0_6": ["呼和浩特市", "包头市", "乌海市", "赤峰市", "通辽市", "呼伦贝尔市", "鄂尔多斯市", "乌兰察布市", "巴彦淖尔市", "兴安盟", "锡林郭勒盟", "阿拉善盟"],
    "0_7": ["沈阳市", "朝阳市", "阜新市", "铁岭市", "抚顺市", "本溪市", "辽阳市", "鞍山市", "丹东市", "大连市", "营口市", "盘锦市", "锦州市", "葫芦岛市"],
    "0_8": ["长春市", "白城市", "松原市", "吉林市", "四平市", "辽源市", "通化市", "白山市", "延边州"],
    "0_9": ["哈尔滨市", "齐齐哈尔市", "七台河市", "黑河市", "大庆市", "鹤岗市", "伊春市", "佳木斯市", "双鸭山市", "鸡西市", "牡丹江市", "绥化市", "大兴安岭地区"],
    "0_10": ["南京市", "徐州市", "连云港市", "宿迁市", "淮安市", "盐城市", "扬州市", "泰州市", "南通市", "镇江市", "常州市", "无锡市", "苏州市"],
    "0_11": ["杭州市", "湖州市", "嘉兴市", "舟山市", "宁波市", "绍兴市", "衢州市", "金华市", "台州市", "温州市", "丽水市"],
    "0_12": ["合肥市", "宿州市", "淮北市", "亳州市", "阜阳市", "蚌埠市", "淮南市", "滁州市", "马鞍山市", "芜湖市", "铜陵市", "安庆市", "黄山市", "六安市", "巢湖市", "池州市", "宣城市"],
    "0_13": ["福州市", "南平市", "莆田市", "三明市", "泉州市", "厦门市", "漳州市", "龙岩市", "宁德市"],
    "0_14": ["南昌市", "九江市", "景德镇市", "鹰潭市", "新余市", "萍乡市", "赣州市", "上饶市", "抚州市", "宜春市", "吉安市"],
    "0_15": ["济南市", "青岛市", "聊城市", "德州市", "东营市", "淄博市", "潍坊市", "烟台市", "威海市", "日照市", "临沂市", "枣庄市", "济宁市", "泰安市", "莱芜市", "滨州市", "菏泽市"],
    "0_16": ["郑州市", "开封市", "三门峡市", "洛阳市", "焦作市", "新乡市", "鹤壁市", "安阳市", "濮阳市", "商丘市", "许昌市", "漯河市", "平顶山市", "南阳市", "信阳市", "周口市", "驻马店市", "济源市"],
    "0_17": ["武汉市", "十堰市", "襄阳市", "荆门市", "孝感市", "黄冈市", "鄂州市", "黄石市", "咸宁市", "荆州市", "宜昌市", "随州市", "恩施州"],
    "0_18": ["长沙市", "张家界市", "常德市", "益阳市", "岳阳市", "株洲市", "湘潭市", "衡阳市", "郴州市", "永州市", "邵阳市", "怀化市", "娄底市", "湘西州"],
    "0_19": ["广州市", "深圳市", "清远市", "韶关市", "河源市", "梅州市", "潮州市", "汕头市", "揭阳市", "汕尾市", "惠州市", "东莞市", "珠海市", "中山市", "江门市", "佛山市", "肇庆市", "云浮市", "阳江市", "茂名市", "湛江市"],
    "0_20": ["南宁市", "桂林市", "柳州市", "梧州市", "贵港市", "玉林市", "钦州市", "北海市", "防城港市", "崇左市", "百色市", "河池市", "来宾市", "贺州市"],
    "0_21": ["海口市", "三亚市"],
    "0_22": ["成都市", "广元市", "绵阳市", "德阳市", "南充市", "广安市", "遂宁市", "内江市", "乐山市", "自贡市", "泸州市", "宜宾市", "攀枝花市", "巴中市", "达州市", "资阳市", "眉山市", "雅安市", "阿坝州", "甘孜州", "凉山州"],
    "0_23": ["贵阳市", "六盘水市", "遵义市", "安顺市", "毕节地区", "铜仁地区", "黔东南州", "黔南州", "黔西南州"],
    "0_24": ["昆明市", "曲靖市", "玉溪市", "保山市", "昭通市", "丽江市", "普洱市", "临沧市", "德宏州", "怒江州", "迪庆州", "大理州", "楚雄州", "红河州", "文山州", "西双版纳州"],
    "0_25": ["拉萨市", "那曲地区", "昌都地区", "林芝地区", "山南地区", "日喀则地区", "阿里地区"],
    "0_26": ["西安市", "延安市", "铜川市", "渭南市", "咸阳市", "宝鸡市", "汉中市", "榆林市", "安康市", "商洛市"],
    "0_27": ["兰州市", "嘉峪关市", "白银市", "天水市", "武威市", "酒泉市", "张掖市", "庆阳市", "平凉市", "定西市", "陇南市", "临夏州", "甘南州"],
    "0_28": ["西宁市", "海东地区", "海北州", "海南州", "黄南州", "果洛州", "玉树州", "海西州"],
    "0_29": ["银川市", "石嘴山市", "吴忠市", "固原市", "中卫市"],
    "0_30": ["乌鲁木齐市", "克拉玛依市", "喀什地区", "阿克苏地区", "和田地区", "吐鲁番地区", "哈密地区", "克孜勒苏柯州", "博尔塔拉州", "昌吉州", "巴音郭楞州", "伊犁州", "塔城地区", "阿勒泰地区"],
    "0_31": ["香港特别行政区"],
    "0_32": ["澳门特别行政区"],
    "0_33": ["台北", "高雄", "台中", "花莲", "基隆", "嘉义", "金门", "连江", "苗栗", "南投", "澎湖", "屏东", "台东", "台南", "桃园", "新竹", "宜兰", "云林", "彰化"],
    "0_34": ["其它国家及地区"]
};

/*
* citys-api.js 省市数据操作
* author:devin87@qq.com  
* update:2020/08/13 15:33
*/
(function (undefined) {
    var list_prov = dataCitys["0"],
        map_prov = {},

        map_prov_citys = {},

        list_city = [],
        map_city = {},

        I_NOT_FOUND = -1,
        PROV_OTHER = "其它国家及地区";

    var map_addr_by_name = {
        '海南州': '青海省海南州',
        '吉林市': '吉林省吉林市'
    };

    /**
	 * 格式化省份名称 eg:湖北省 => 湖北
	 * @param {string} prov 
	 */
    function formatProv(prov) {
        if (prov.length <= 2) return prov;
        return prov.replace(/[省市]$|国家及地区$/g, '');
    }

    /**
	 * 格式化城市名称 eg:武汉市 => 武汉
	 * @param {string} city 
	 */
    function formatCity(city) {
        if (city.length <= 2) return city;
        return city.replace(/国家及地区$|特别行政区$|[州市]$|地区$/g, '');
    }

    //数据初始化
    function init() {
        for (var i = 0, len = list_prov.length; i < len; i++) {
            var prov = list_prov[i];
            map_prov[formatProv(prov)] = i;
            map_prov_citys[i] = [];

            var citys = dataCitys["0_" + i] || [];
            for (var j = 0, len2 = citys.length; j < len2; j++) {
                var dataCity = { pid: i, prov: prov, cid: j, city: citys[j] };

                list_city.push(dataCity);
                map_city[formatCity(citys[j])] = dataCity;
                map_prov_citys[i].push(dataCity);
            }
        }
    }

    init();

    /**
	 * 根据省份编号获取城市对象列表 => [{pid,prov,cid,city}]
	 * @param {number} pid 省份编号 
	 */
    function getDataCitys(pid) {
        return map_prov_citys[pid];
    }

    /**
	 * 根据省份编号获取城市列表
	 * @param {number} pid 省份编号 
	 */
    function getCitys(pid) {
        return dataCitys["0_" + pid];
    }

    /**
	 * 获取省份编号
	 * @param {string} prov 省份名称
	 */
    function getPid(prov) {
        var pid = map_prov[formatProv(prov)];
        return pid != undefined ? pid : I_NOT_FOUND;
    }

    /**
	 * 获取城市对象
	 * @param {string} city 城市名称
	 */
    function getDataCity(city) {
        return map_city[formatCity(city)];
    }

    /**
	 * 获取城市编号
	 * @param {string} prov 省份名称
	 * @param {string} city 城市名称
	 */
    function getCid(prov, city) {
        if (city == undefined) city = prov;

        var data = getDataCity(city);
        return data ? data.cid : I_NOT_FOUND;
    }

    /**
	 * 获取省份名称
	 * @param {number} pid 省份编号
	 */
    function getProv(pid) {
        return list_prov[pid];
    }

    /**
	 * 获取城市名称
	 * @param {number} pid 省份编号
	 * @param {number} cid 城市编号
	 */
    function getCity(pid, cid) {
        var citys = getCitys(pid);

        return citys ? citys[cid] : undefined;
    }

    /**
	 * 查找匹配的省份编号,若未匹配到映射,则会在所有省份中查找
	 * @param {string} prov 省份名称
	 * @param {boolean} is_full_match 为true则不在列表中查找,直接返回结果
	 */
    function findPid(prov, is_full_match) {
        if (!prov) return I_NOT_FOUND;

        var pid = getPid(prov);
        if (pid != I_NOT_FOUND) return pid;
        if (is_full_match) return I_NOT_FOUND;

        for (var i = 0, len = list_prov.length; i < len; i++) {
            if (prov.indexOf(formatProv(list_prov[i])) != -1) return i;
        }

        return I_NOT_FOUND;
    }

    /**
     * 根据城市名称查找城市对象
     * @param {string} city 城市名称或代码
     * @param {Array.<object>} citys 城市列表 eg: ['武汉'] | [{cid:0,city:'武汉'}]
     */
    function findCityInList(city, citys) {
        for (var i = 0, len = citys.length; i < len; i++) {
            var data = citys[i];
            if (data.city) {
                if (city.indexOf(formatCity(data.city)) != -1) return data;
            } else if (typeof data == 'string') {
                if (city.indexOf(formatCity(data)) != -1) return { cid: i, city: data };
            }
        }
    }

    /**
	 * 查找匹配的城市,若未匹配到映射,则会在所有城市中查找
	 * @param {string} city 城市名称
     * @param {Array.<object>|undefined} citys 城市列表,为空则查找所有城市
     * @param {boolean} is_full_match 为true则不在城市列表中查找,直接返回结果
	 */
    function findCity(city, citys, is_full_match) {
        if (!city) return;

        city = formatCity(city).replace('襄樊', '襄阳').replace('思茅', '普洱');

        //若指定了城市列表，则优先在指定的城市列表中查找
        if (citys) return findCityInList(city, citys);

        var data_city = getDataCity(city);
        if (data_city || is_full_match) return data_city;

        return findCityInList(city, list_city);
    }

    /**
	 * 查找匹配的城市,若未匹配到映射且未指定citys,则会在所有城市中查找
	 * @param {string} city 城市名称
     * @param {Array.<object>|undefined} citys 城市列表,为空则查找所有城市
     * @param {boolean} is_full_match 为true则不在城市列表中查找,直接返回结果
	 */
    function findCid(city, citys, is_full_match) {
        var data = findCity(city, citys);
        return data ? data.cid : I_NOT_FOUND;
    }

    /**
     * 查找省市数据
     * @param {string} prov 省份
     * @param {string} city 城市
     */
    function findData(prov, city) {
        var result = {}, citys;

        if (prov) {
            var pid = findPid(prov, false);
            if (pid != undefined && pid != I_NOT_FOUND) {
                result.pid = pid;
                result.prov = getProv(pid);

                citys = getDataCitys(pid);
            }
        }

        if (city) {
            var data_city = findCity(city, citys);
            if (data_city) {
                if (data_city.pid != undefined) {
                    result.pid = data_city.pid;
                    result.prov = getProv(result.pid);
                }

                result.cid = data_city.cid;
                result.city = data_city.city;
            }
        }

        return result;
    }

    /**
	 * 查找省市数据
	 * @param {string} addr 省市地址 eg:湖北武汉 联通|湖北省武汉市|湖北武汉|湖北|武汉|武汉武汉
	 * @param {boolean} is_full_match 是否完整匹配 eg: 海南州  => 青海省海南州
	 */
    function find(addr, is_full_match) {
        var gs = (addr + '').split(' '),
            geo = gs[0] || '';

        if (!geo) return {};

        geo = (map_addr_by_name[geo] || geo) + '';

        var i = geo.indexOf('省');
        if (i > 0) return findData(geo.slice(0, i), geo.slice(i + 1));

        var result = {},
            pid = is_full_match ? map_prov[formatProv(geo)] : findPid(geo),
            citys;

        if (pid != undefined && pid != I_NOT_FOUND) {
            result.pid = pid;
            result.prov = getProv(pid);

            if (is_full_match || formatProv(result.prov) == formatProv(geo)) return result;

            citys = getDataCitys(pid);
        }

        var data_city = findCity(geo, citys, is_full_match);

        if (data_city) {
            if (data_city.pid != undefined) {
                result.pid = data_city.pid;
                result.prov = getProv(result.pid);
            }

            result.cid = data_city.cid;
            result.city = data_city.city;
        }

        return result;
    }

    /**
     * 格式化区域 eg: 武汉市 => [{prov:'湖北省',city:'武汉市'}]
     * @param {string} areas 区域,多个之间用空格分隔 eg: 海南省 包头市 海南州
     */
    function formatAreas(areas) {
        if (!areas || areas == '*') return [];

        var list_area = areas.split(' '), map_prov = {}, list_prov = [], list_city = [];
        for (var i = 0, len = list_area.length; i < len; i++) {
            var area = list_area[i];
            if (!area) continue;

            var sc = find(area, true);

            //没有匹配的省份或城市
            if (sc.pid == undefined) continue;

            //省份
            if (sc.cid == undefined) {
                if (!map_prov[sc.prov]) {
                    list_prov.push(sc);
                    map_prov[sc.prov] = true;
                }
                continue;
            }

            //城市
            list_city.push(sc);
        }

        //过滤省份已存在的城市 eg: '湖北,武汉,孝感,三亚' => '湖北,三亚'
        list_city = list_city.filter(function (sc) {
            return !map_prov[sc.prov];
        });

        return list_prov.concat(list_city);
    }

    /**
     * 根据省份或城市筛选区域。若返回空数组则表示未筛选；若返回undefined则表示未匹配到数据；正常则返回 [{pid,prov,cid,city}]
     * @param {string} areas 区域,多个之间用空格分隔 eg: 海南省 包头市 海南州
     * @param {string} prov 省份
     * @param {string} city 城市,为空则根据省份筛选
     */
    function filterAreas(areas, prov, city) {
        var list_area = formatAreas(areas);
        if (!prov) return list_area;

        var sc = findData(prov, city);
        if (sc.pid == undefined) return undefined;

        if (list_area.length <= 0) {
            return [sc];
        }

        var citys = [];

        for (var i = 0, len = list_area.length; i < len; i++) {
            var area = list_area[i];
            if (!area || area.pid != sc.pid) continue;

            if (sc.cid == undefined) {
                if (area.cid == undefined) return [sc];
                citys.push(area);
            } else {
                if (area.cid == undefined || area.cid == sc.cid) return [sc];
            }
        }

        return citys.length > 0 ? citys : undefined;
    }

    /**
     * 检查省份或城市是否在区域内
     * @param {string} areas 区域,多个之间用空格分隔 eg: 海南省 包头市 海南州
     * @param {number} pid 省份ID
     * @param {number} cid 城市ID,为空则检查省份是否在区域内
     */
    function checkInAreas(areas, pid, cid) {
        if (!areas || areas == '*') return true;
        if (pid == undefined) return false;

        var list_area = (areas + '').split(' ');
        for (var i = 0, len = list_area.length; i < len; i++) {
            var area = list_area[i].trim();
            if (!area) continue;

            var sc = find(area, true);
            //没有匹配的省份或城市
            if (sc.pid == undefined) continue;

            if (sc.pid == pid) {
                if (cid == undefined) {
                    if (sc.cid == undefined) return true;
                } else {
                    //area是省份或相同的城市
                    if (sc.cid == undefined || sc.cid == cid) return true;
                }
            }
        }

        return false;
    }

    var DC = {
        //所有省份
        provs: list_prov,
        //所有城市
        citys: list_city,

        mapProv: map_prov,
        mapCity: map_city,

        getDataCitys: getDataCitys,
        getCitys: getCitys,

        getPid: getPid,
        getCid: getCid,

        getProv: getProv,
        getCity: getCity,

        formatProv: formatProv,
        formatCity: formatCity,

        findPid: findPid,
        findCid: findCid,
        findCity: findCity,
        findData: findData,

        find: find,

        formatAreas: formatAreas,
        filterAreas: filterAreas,
        checkInAreas: checkInAreas,

        OTHER: PROV_OTHER
    };

    if (typeof module === 'object' && typeof module.exports === 'object') module.exports = DC;

    if (typeof window !== 'undefined') window.DC = DC;
})();