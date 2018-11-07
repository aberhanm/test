<template>
    <div>
        <HelloWorld></HelloWorld>
        <ul>
            <li v-for="(item,key) in list" :key='key'>
                <time v-text="$utils.goodTime(item.create_at)"></time>
                <router-link :to="'/content/'+item.id">
                {{item.title}}
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import HelloWorld from "../components/HelloWorld.vue";
export default {
  components: { HelloWorld },
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$api.get("topics", null, r => {
        console.log(r);
        if (r.success == true) {
          var list = r.data;
          this.list = list;
          console.log(this.list);
        }
      });
    }
  }
};
</script>

