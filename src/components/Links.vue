<template>
    <div>
        <h1 class="content-title"><font-awesome-icon icon="link" class="icon"/> Links</h1>
        <ul class="links">
          <li class="card">
            <img class="card-img" src="../assets/back-img/twitter-profile.png" alt="">
            <div class="card-content">
              <h1 class="card-title jp">Twitter</h1>
              <p class="card-text">My Twitter Account</p>
              <br>
              <a href="https://twitter.com/meru_golang" class="card-link">Go to link</a>
            </div>
          </li>

          <li class="card">
            <img class="card-img" src="../assets/back-img/meru-img.png" alt="">
            <div class="card-content">
              <h1 class="card-title jp">VRChat</h1>
              <p class="card-text">VRChat Account</p>
              <br>
              <a href="https://vrchat.com/home/user/usr_4da620e2-0bb1-41ce-ba2a-65a01f78978d" class="card-link">Go to link</a>
            </div>
          </li>

        </ul>
    </div>
</template>




<style>
.links{
  list-style-type: none;
  padding-left: 0;
  text-align: center;
  padding-left: 15%;
  padding-right: 15%;
}
.jp{
  font-weight: 100;
}
.card-lang{
  font-weight: 500;
}
.card {
  display: inline-block;
  margin: 30px 60px;
  width: 350px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
}
.card-img {
  border-radius: 5px 5px 0 0;
  width: 100%;
  height: 200px;
  object-fit: contain;
}
.card-content {
  padding: 20px;
}
.card-title {
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}
.card-text {
  color: #777;
  font-size: 14px;
  line-height: 1.5;
}
.card-link{
  border: 2px solid #00aaff;
  text-decoration: none;
  color: #00aaff;
  margin: 0 10px;
  padding: 5px 10px;
  border-radius: 5px;
  transition: 0.4s;
  font-weight: bold;
}
.card-link:hover {
  background-color: #00aaff;
  color: white;
}
.github-link{
  border-color: #171515;
  color: #171515;
}
.github-link:hover {
  background-color: #171515;
  color: white;
}
/*.work-content{
	width: 350px;
	padding: 10px;
	margin: 30px 60px;
  display: inline-block;
}
.work-content:hover{
  background-color: rgba(50, 50, 100, 0.3);
}
.works-image{
    width: 100%;
}*/
@media screen and (max-width: 768px){
  .links{
      padding-left: 1%;
      padding-right: 1%;
  }
  .card-link{
    border: 2px solid #00aaff;
    background-color: #00aaff;
    text-decoration: none;
    color: white;
    margin: 0 10px;
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: bold;
  }
  .github-link{
    background-color: #171515;
    border-color: #171515;
  }
}
@media screen and (max-width: 550px){
  .card{
    width: 280px;
    margin: 30px 0;
  }
  
}
</style>
