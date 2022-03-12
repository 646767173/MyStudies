/*
    .点击回车
    .查询数据
    .渲染数据
    
    1.歌曲搜索接口
    请求地址：http://musicapi.leanapp.cn/search
    请求方法：get
    请求参数：keywords(关键字)
    响应内容：歌曲搜索结果

    2.歌曲url获取接口
    请求地址：http://musicapi.leanapp.cn/music/url
    请求方法：get
    请求参数：id(关键字)
    响应内容：歌曲url地址

    3.歌曲详情获取接口
    请求地址：http://musicapi.leanapp.cn/song/detail
    请求方法：get
    请求参数：ids(歌曲id)
    响应内容：歌曲详情(包括封面)

    4.歌曲评论获取接口
    请求地址：http://musicapi.leanapp.cn/comment/music
    请求方法：get
    请求参数：id(歌曲id,type固定为0)
    响应内容：歌曲热门评论

    5.歌曲MV获取接口
    请求地址：https://autumnfish.cn/mv/url
    请求方法：get
    请求参数：id(MVid,为0即没有MV)
    响应内容：歌曲MV地址
*/ 
var app = new Vue({
    el:"#player",
    data:{
        query:"",//查询关键字
        musicList:[],//歌曲数组
        musicUrl:"",//歌曲url
        picUrl:"",//歌曲封面url
        hotComments:[],//歌曲评论
        mvUrl:"",//歌曲MV的地址
        isShow:""//遮罩层显示
    },
    methods:{
        //歌曲搜索
        searchMusic:function(){
            var that = this;
            axios.get("http://musicapi.leanapp.cn/search?keywords="+this.query)
            .then(function(response){
                // console.log(response.data.result.songs);
                that.musicList = response.data.result.songs;
            })
            .catch(function(err){
                console.log(err);
            })
            
        },
        //歌曲播放
        playMusic:function(musicId){
            var that = this;
            // console.log(musicId);
            //歌曲播放
            axios.get("http://musicapi.leanapp.cn/music/url?id="+musicId)
            .then(function(response){
                // console.log(response.data.data[0].url);
                that.musicUrl = response.data.data[0].url;
            },function(err){
                console.log(err);
            })

            //歌曲详情
            axios.get("http://musicapi.leanapp.cn/song/detail?ids="+musicId)
            .then(function(response){
                // console.log(response.data.songs[0].al.picUrl);
                that.picUrl =  response.data.songs[0].al.picUrl;
            },function(err){
                console.log(err);
            });

            //歌曲热评
            axios.get("http://musicapi.leanapp.cn/comment/music/hot?type=0&id="+musicId)
            .then(function(response){
                // console.log(response.data.hotComments);
                that.hotComments = response.data.hotComments;
            },function(err){
                console.log(err);
            })
        },
        //播放MV
        playMV:function(mvId){
            var that = this;
            axios.get("https://autumnfish.cn/mv/url?id="+mvId)
            .then(function(response){
                // console.log(response.data.data.url);
                that.isShow = true;
                that.mvUrl = response.data.data.url;
            },function(err){
                console.log(err);
            })
        },
        close:function(){
            this.mvUrl="",
            this.isShow = false;
        }
    }
});