<template>
  <div class="wrapper">
    <div class="book-card">
      <div class="content-wrapper">
        <v-img :src="item.image" :lazy-src="item.image" alt="" class="book-card-img"/>
        <div class="card-content">
          <div class="book-name">{{item.name}}</div>
          <div class="book-by"> By :{{item.author}}</div>
          <div class="rate">
            <fieldset class="rating book-rate">
              <v-rating
                background-color="warning lighten-1"
                color="warning"
                empty-icon="fa-regular fa-star"
                full-icon="fa-solid fa-star"
                length="5"
                readonly
                size="12"
                value="3"
              ></v-rating>
            </fieldset>
          </div>
          <div class="book-sum card-sum">{{item.Description}}</div>
        </div>
      </div>
      <div class="likes">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "productCard",
  props:{
    item:{default:''}
  }
}
</script>

<style scoped>
.wrapper {
  transition: .1s;
}
.wrapper:hover{
  outline: 3px solid #62ab00;
}
.wrapper:hover .book-card-img{
  transform: scale(1.04);
}
.rating {
  border: none;
}
.rating > input {
  display: none;
}
.rating > label {
  color: #fff;
  float: right;
}

.book-sum {
  margin-top: 20px;
  font-size: 14px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.book-card {
  margin-top: 20px;
  background-color: #fff;
  height: 270px;
  box-shadow: -1px 3px 8px -1px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 0 0 20px 20px;
  color: var(--body-color-light);
}

.book-card-img {
  width: 160px;
  margin-top: -35px;
  border-radius: 2px;
  box-shadow: 0px 1px 7px 2px #c7c9d3;
  border-bottom: 1px solid #dcddde;
  object-fit: cover;
  margin-bottom: 20px;
  transition: 0.3s ease;
}
.book-card-img:hover {
  transform: scale(1.04);
}

.card-content {
  color: var(--body-color);
  padding: 30px;
  overflow: hidden;
  position: relative;
}

.book-name {
  font-weight: 500;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.book-by {
  font-size: 13px;
  color: var(--body-color-light);
  margin-top: 4px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.book-rate > label {
  color: #cccccc;
}

.rate {
  display: inline-block;
  white-space: nowrap;
}


.card-sum {
  font-size: 13px;
  line-height: 1.6em;
  -webkit-line-clamp: 4;
  margin-top: 15px;
}

.content-wrapper {
  display: flex;
  border-bottom: 1px solid #ebedef;
  position: relative;
}
.content-wrapper:before {
  content: "";
  position: absolute;
  background-color: #8f98a9;
  background-color: #aaaebc;
  box-shadow: 0 -6px 0 0 #aaaebc, 0 6px 0 0 #aaaebc;
  width: 4px;
  height: 4px;
  border: 0;
  padding: 0;
  right: 12px;
  top: 17px;
  border-radius: 50%;
  margin-left: auto;
}

.like-name span {
  font-weight: 600;
}
</style>
