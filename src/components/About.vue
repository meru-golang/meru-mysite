<template>
    <div>
        <h1 class="content-title"><font-awesome-icon icon="user-circle" class="icon"/> About</h1>
        <div>
            <div class="about">
              <div class="me">
                <h2><font-awesome-icon icon="pen" class="icon"/> Name</h2>
                <p class="text">める(meru_golang)</p>
              </div>

              <div class="me">
                <h2><font-awesome-icon icon="birthday-cake" class="icon"/> Birthday</h2>
                <p class="text">2006-03-03</p>
              </div>
            </div>
            

            <h2><font-awesome-icon icon="heart" class="icon resent"/> A little self introduction</h2>
            <p class="text">
              どうも、めるです。<br>
              ほぼ毎日プログラミングをやっており、最近はゲームの解析やセキュリティ関係の事をしてます。<br>
              作った物公開した事はありませんが、案件などは受けておりそこら辺にいると思います。<br>
              暇な日はオンゲキやSDVXなどの音ゲーをしてます。
            </p>
        </div>
    </div>
</template>


<style scoped>
.about{
    display:inline-flex;
    padding-left: 5%;
    padding-right: 5%;
    
}

.resent{
  margin-top: 50px;
}

.me{
    margin:0 50px;
}

.text{
  font-weight: 300;
}


@media screen and (max-width: 768px){
	.about {
		flex-direction: column;
	}

	.me {
    margin: 0 auto;
	}
}
</style>