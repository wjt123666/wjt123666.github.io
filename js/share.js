function share_(){let e=window.location.origin+window.location.pathname;try{var t=document.title,n=t.endsWith("| peach-blog")?t.substring(0,t.length-14):t;navigator.clipboard.writeText("peach-sblog的站内分享\n标题："+n+"\n链接："+e+"\n欢迎来访！🍭🍭🍭"),new Vue({data:function(){this.$notify({title:"成功复制分享信息🎉",message:"您现在可以通过粘贴直接跟小伙伴分享了！",position:"top-left",offset:50,showClose:!0,type:"success",duration:5e3})}})}catch(e){console.error("复制失败！",e)}}let TT=null;function debounce(e,t){null!==TT&&clearTimeout(TT),TT=setTimeout(e,t)}function share(){debounce(share_,300)}