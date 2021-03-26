/**
 * 数据绑定
 * @type {Vue}
 */
const store = {
    isDark: false
};

let preloader = new Vue({
    el: '#preloader',
    data: {
        sharedState: store,
    },
    mounted: function () {
        let media_dark = window.matchMedia('(prefers-color-scheme: dark)');
        this.sharedState.isDark = media_dark.matches;
        let callback_dark = (e) => {
            let prefersDarkMode = e.matches;
            if (prefersDarkMode) {
                this.sharedState.isDark = true;
            }
        };
        if (typeof media_dark.addEventListener === 'function') {
            media_dark.addEventListener('change', callback_dark);
        } else if (typeof media_dark.addListener === 'function') {
            media_dark.addListener(callback_dark);
        }

        let media_light = window.matchMedia('(prefers-color-scheme: light)');
        let callback_light = (e) => {
            let prefersDarkMode = e.matches;
            if (prefersDarkMode) {
                this.sharedState.isDark = false;
            }
        };
        if (typeof media_light.addEventListener === 'function') {
            media_light.addEventListener('change', callback_light);
        } else if (typeof media_light.addListener === 'function') {
            media_light.addListener(callback_light);
        }
    },
});

let header = new Vue({
    el: '.desktop-header-2',
    data: {
        sharedState: store,
    }
});

let home = new Vue({
    el: '#home',
    data: {
        name: 'saowu',
        qq: '786021717',
        wechart: "images/wxqrcode.png",
        github: "https://github.com/saowu",
        blog: "blog/",
        mail: 'saowu.gan@qq.com',
        sharedState: store,
    }
});

let about = new Vue({
    el: '#about',
    data: {
        skills: [
            {key: 'Java', val: 75, color: '#FFD15C'},
            {key: 'Front-end', val: 50, color: '#FF4C60'},
            {key: 'Linux', val: 40, color: '#6C6CE5'},
        ],
        description: '从2016年到如今的技术积累过程中，不断的入门，又不断的放弃，隔天再忿忿的捡起。在这个光怪陆离的世界中，依旧还是个不起眼的菜鸟，希望以后能保持平常心，继续坚持学习，迎接未来！！！',
        cv: 'cv/cv.html',
        statistics: [
            {key: 'Started', val: 2016, icon: 'icon-fire'},
            {key: 'Repositories', val: 23, icon: 'icon-social-github'},
            {key: 'Music', val: 4027, icon: 'icon-music-tone-alt'},
            {key: 'Articles', val: 31, icon: 'icon-book-open'},
        ],
        sharedState: store,
    }
});

let experience = new Vue({
    el: '#experience',
    data: {
        edu: [
            {time: '2019 - Present', title: '大学本科', text: '目前就读于山东交通学院，计算机科学与技术专业。继续学习...'},
            {time: '2016 - 2019', title: '大学专科', text: '就读于山东电子职业技术学院，软件技术专业。曾获得第十五届山东省大学生软件设计大赛二等奖。'},
            {time: '2004 - 2016', title: '义务教育', text: '文明礼貌、敬老爱幼、保护环境、讲究卫生、遵纪守法、勤恳敬业、助人为乐、见义勇为、诚实守信、正直向上。'},
        ],
        exp: [
            {
                time: '2020.07 - 2020.9',
                title: '山东艾瑞达电子有限公司 - 软件定制服务',
                text: '使用Springboot+Mybatis+Mysql+RXTX技术开发基于RS-485通讯协议的气体检测系统；'
            },
            {
                time: '2019.06 - 2019.09',
                title: '山东星维九州安全技术有限公司 - 网络安全部',
                text: '负责互联网设备（主机、安全设备）漏洞扫描，入侵检测系统的值守与安全日志分析，应急响应；'
            },
            {
                time: '2017.12 - 2018.03',
                title: '山东洪溯信息科技有限公司 - 软件开发部',
                text: '负责某电商平台的部分后台开发，数控设备物联网APP中间件及部分后台开发；'
            },
        ],
        loading: 0.2,
        sharedState: store,
    }
});

let blog = new Vue({
    el: '#blog',
    data: {
        posts: [
            {
                category: 'Python',
                category_link: 'blog/mVqrRKBAz/',
                title: 'FigureBed图床系统',
                create: '2020-04-03',
                link: 'blog/IVwOk1Phb/',
                img: 'images/blog/1.svg'
            },
            {
                category: 'Java',
                category_link: 'blog/FWHSehn5o/',
                title: '仿制Springboot框架',
                create: '2020-05-09',
                link: 'blog/dnlLkMdxz/',
                img: 'images/blog/2.svg'
            },
            {
                category: 'Java',
                category_link: 'blog/FWHSehn5o/',
                title: 'Dataway接口配置工具',
                create: '2020-06-17',
                link: 'blog/dzBUfOA4S/',
                img: 'images/blog/3.svg'
            },

        ],
        creative: 'saowu',
        blog_link: 'blog/',
        sharedState: store,
    }
});

let services = new Vue({
    el: '#services',
    data: {
        services: [
            {
                title: 'Java Development',
                text: '能熟练使用Java，了解JVM原理。并熟练使用Spring、Mybatis、SpringBoot、Netty等常用框架。',
                img: 'images/service-java.svg',
                color: '#6C6CE5',
                css: 'text-light shadow-blue',
            },
            {
                title: 'Front-end Development',
                text: '能熟练使用Photoshop、Bootstrap、jQuery、Vue独立完成普遍的前端开发。',
                img: 'images/service-2.svg',
                color: '#F9D74C',
                css: 'text-dark shadow-yellow',
            },
            {
                title: 'Linux Deploy',
                text: '能熟练使用Linux，进行常见的运维操作，以及安装并配置MySQL，JDK，Docker，Jenkins等开发部署工具。',
                img: 'images/service-linux.svg',
                color: '#F97B8B',
                css: 'text-light shadow-pink',
            },
        ],
        sharedState: store,
    }
});

let video = new Vue({
    el: '#video',
    data: {
        sharedState: store,
        size: 6,
        videos: [
            {
                'type': 'knowledge',
                'name': '拉线式手榴弹的原理解释',
                link: 'https://www.bilibili.com/video/BV1FV411k7n4',
                img: 'images/works/knowledge.svg'
            },
            {
                'type': 'other',
                'name': '最 强 单 身 狗',
                link: 'https://www.bilibili.com/video/BV1Pi4y1j7tU',
                img: 'images/works/bilibili.svg'
            },
            {
                'type': 'music',
                'name': '《明日方舟》EP',
                link: 'https://www.bilibili.com/video/BV11z4y1X7V5',
                img: 'images/works/bilibili.svg'
            },
            {
                'type': 'music',
                'name': '天空之城 - 久石让',
                link: 'https://www.bilibili.com/video/BV1is411r7BW',
                img: 'images/works/music.svg'
            },
            {
                'type': 'other',
                'name': '《后浪》- bilibili',
                link: 'https://www.bilibili.com/video/BV1FV411d7u7',
                img: 'images/works/bilibili.svg'
            },
            {
                'type': 'music',
                'name': 'My Love - 李承哲',
                link: 'https://www.bilibili.com/video/BV1hW411A7uw',
                img: 'images/works/music.svg'
            },
            {
                'type': 'music',
                'name': '国王和乞丐 - 华晨宇/杨宗纬',
                link: 'https://www.bilibili.com/video/BV1ut411S7PY',
                img: 'images/works/music.svg'
            },
            {
                'type': 'music',
                'name': '你就不要想起我 - 张杰',
                link: 'https://www.bilibili.com/video/BV16x411a7hj',
                img: 'images/works/music.svg'
            },
            {
                'type': 'music',
                'name': '明日へ - MISIA',
                link: 'https://www.bilibili.com/video/BV1Xt4y1m7D9',
                img: 'images/works/music.svg'
            },
        ]
    },
    methods: {
        getTopList: function (num) {
            this.items = this.videos.slice(0, num);
        }
    }
});

let flink = new Vue({
    el: '#flink',
    data: {
        sharedState: store,
        skills: [
            'images/client-1.svg',
            'images/client-2.svg',
            'images/client-3.svg',
            'images/client-4.svg',
            'images/client-5.svg',
            'images/client-6.svg',
            'images/client-7.svg',
            'images/client-8.svg',
        ],
        links: [
            {
                avatar: 'images/avatar-3.svg',
                link: 'http://alex.hardcreate.cn/blog/index/',
                name: 'ALEX\'s Blog',
                subtitle: '欢迎阁下访问我的博客',
                subtext: '有相同的兴趣的朋友可以联系我一起探讨，对于其中有任何问题请与我联系。'
            },
            {
                avatar: 'https://lafish.fun/images/avatar.png',
                link: 'https://lafish.fun/',
                name: 'Lafish的部落格',
                subtitle: '记录某小白的一旬成长',
                subtext: '在这里记录一下我的大学学习心得，算是一个学习技术生活向的博客。 '
            },
            {
                avatar: 'https://cdn.jsdelivr.net/gh/XXXZhy/Blog_Image/images/%E5%A4%B4%E5%83%8F.png',
                link: 'https://www.xxxzhy.com/',
                name: 'XXXZhy',
                subtitle: 'Better late than never.',
                subtext: '人生就像一盒巧克力，你永远不知道下一颗是什么味道。'
            },
            {
                avatar: 'https://crj0b.com/img/logo.png',
                link: 'https://crj0b.com/',
                name: 'Crj0b\'s Blog',
                subtitle: '生活,就是生下来,活下去。 ',
                subtext: 'This is a blog that shares the growth of personal technology learning.',
            },
            {
                avatar: 'images/avatar-3.svg',
                link: 'https://blog.itjoker.cn/',
                name: 'ITJoker',
                subtitle: '记录日常？摸鱼代码？随缘弹琴？',
                subtext: 'Be brave no matter what your life is like to you. '
            },
            {
                avatar: 'images/avatar-3.svg',
                link: 'https://blog.pangao.vip/',
                name: '潘高的小站',
                subtitle: 'IT套路深，必须瞎折腾',
                subtext: '选择了破解生命密码的专业，奈何对计算机情有独钟。'
            },
        ]
    },
    computed: {
        defaultAvatar() {
            return "this.src='images/avatar-3.svg'";
        }
    }
});


let map = new Vue({
    el: '#map',
    data: {
        // https://lbs.amap.com/console/show/card
        // 1080*500
        src: 'https://surl.amap.com/1I1gGmxU8DH',
    }
});
