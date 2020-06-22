$(function () {
    "use strict";

    // init the validator
    // validator files are included in the download package
    // otherwise download from http://1000hz.github.io/bootstrap-validator

    $('#contact-form').validator();


    // when the form is submitted
    $('#contact-form').on('submit', function (e) {

        // if the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {
            var url = "form/contact.php";

            // POST values in the background the the script URL
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data) {
                    // data = JSON object that contact.php returns

                    // we recieve the type of the message: success x danger and apply it to the 
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    // let's compose Bootstrap alert box HTML
                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';

                    // If we have messageAlert and messageText
                    if (messageAlert && messageText) {
                        // inject the alert to .messages div in our form
                        $('#contact-form').find('.messages').html(alertBox);
                        // empty the form
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    })
});


let home = new Vue({
    el: '#home',
    data: {
        name: 'saowu',
        qq: '786021717',
        wechart: "images/wxqrcode.png",
        github: "https://github.com/saowu",
        blog: "blog/",
        mail: 'saowu.gan@qq.com'
    }
});

let about = new Vue({
    el: '#about',
    data: {
        skills: [
            {key: 'Java', val: 75, color: '#FFD15C'},
            {key: 'Python', val: 50, color: '#FF4C60'},
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
    }
});
let experience = new Vue({
    el: '#experience',
    data: {
        timeline: [
            {time: '2019 - Present', title: '大学本科', text: '目前就读于山东交通学院，计算机科学与技术专业。'},
            {time: '2019 - 2016', title: '大学专科', text: '就读于山东电子职业技术学院，软件技术专业。曾获得第十五届山东省大学生软件设计大赛二等奖。'},
            {time: '2004 - 2016', title: '义务教育', text: '文明礼貌、敬老爱幼、保护环境、讲究卫生、遵纪守法、勤恳敬业、助人为乐、见义勇为、诚实守信、正直向上。嗯，整挺好！'},
        ],
        loading: 0.2,
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
        blog_link: 'blog/'
    }
});


let video = new Vue({
    el: '#video',
    data: {
        mvs: [
            {'type': 'mv', 'name': '后来 - 刘若英', link: 'https://www.bilibili.com/video/BV1UK411V7TL'},
            {'type': 'mv', 'name': '告白气球 - 周杰伦', link: 'https://www.bilibili.com/video/BV1xx411u7Mu'},
            {'type': 'mv', 'name': 'My Love - 李承哲', link: 'https://www.bilibili.com/video/BV1hW411A7uw'},
            {'type': 'mv', 'name': '国王和乞丐 - 华晨宇/杨宗纬', link: 'https://www.bilibili.com/video/BV1ut411S7PY'},
            {'type': 'mv', 'name': '你就不要想起我 - 张杰', link: 'https://www.bilibili.com/video/BV16x411a7hj'},
            {'type': 'mv', 'name': '明日へ - MISIA', link: 'https://www.bilibili.com/video/BV1Xt4y1m7D9'}
        ]
    }
});


let flink = new Vue({
    el: '#flink',
    data: {
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
                logo: 'https://lafish.fun/images/avatar.png',
                link: 'https://lafish.fun/',
                name: 'Lafish的部落格',
                subtitle: '记录某小白的一旬成长',
                subtext: '在这里记录一下我的大学学习心得，算是一个学习技术生活向的博客。 '
            },
            {
                logo: 'https://cdn.jsdelivr.net/gh/XXXZhy/Blog_Image/images/%E5%A4%B4%E5%83%8F.png',
                link: 'https://www.xxxzhy.com/',
                name: 'XXXZhy',
                subtitle: 'Better late than never.',
                subtext: '人生就像一盒巧克力，你永远不知道下一颗是什么味道。'
            },
            {
                logo: 'https://crj0b.com/img/logo.png',
                link: 'https://crj0b.com/',
                name: 'Crj0b\'s Blog',
                subtitle: 'This is a blog that shares the growth of personal technology learning.',
                subtext: '生活,就是生下来,活下去。 '
            },
            {
                logo: 'https://avatars3.githubusercontent.com/u/39162691?s=460&u=6c6566062b431e54f42f4e9e3392af0ea43b7af8&v=4',
                link: 'https://blog.itjoker.cn/',
                name: 'ITJoker',
                subtitle: '记录日常？摸鱼代码？随缘弹琴？',
                subtext: 'Be brave no matter what your life is like to you. '
            },
            {
                logo: 'https://blog.pangao.vip/images/avatar.jpg',
                link: 'https://blog.pangao.vip/',
                name: '潘高的小站',
                subtitle: 'IT套路深，必须瞎折腾',
                subtext: '选择了破解生命密码的专业，奈何对计算机情有独钟。'
            },
        ]
    }
});