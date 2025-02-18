import AssignmentList from "./AssignmentList.js";
export default {
    components : { AssignmentList }, //register as component
    template : `
        <section class="space-y-6">
            <assignment-list :assignments = "filter.inProgress" title = "In Progress"></assignment-list>
            <assignment-list :assignments = "filter.completed" title = "Completed"></assignment-list>
        </section>
        `,
    data(){
        return{
            assignments:[
                { name:'Finish project', complete: false, id: 1 },
                { name:'Read Chapter 4', complete: false, id: 2 },
                { name:'Turn in homework', complete: false, id: 3 },
            ]
        }
    },
    computed:{
        filter(){
            return{
                inProgress: this.assignments.filter(assignment => ! assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            };
        }  
    }
}