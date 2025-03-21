export default {
    template : `
        <form @submit.prevent="add">
                <div class="border border-gray-600 text-black flex mt-5"> 
                    <input v-model="newAssignment" placeholder="New Assignment..." class="p-2"/>
                    <button type="submit" class="bg-white p-2 border-l">Add</button>
                </div>
        </form>
    `,

    data(){
        return {
            newAssignment : ''
        }
    },

    methods:{
        add(){
            this.$emit('add', this.newAssignment);
            //his.assignments.push({
            //name : this.newAssignment,
            //completed : false,
            //id : this.assignments.length + 1
            //);

            this.newAssignment = '';
         }
    }
};