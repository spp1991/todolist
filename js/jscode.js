let total_task=0;
let finished_task_array=[];
let unfinished_task_array=[];

$(document).ready(function() {
  
  updateTaskCount();
  $("#taskAdd").click(function(){
      taskDes=$('#taskDescription').val().trim();
      if(taskDes != ""){
        total_task+=1
        unfinished_task_array.push([taskDes,total_task]);
        display_element(taskDes,total_task,"unfinished");
      }
      else{
        alert("Task Description can not be blank");
      }
  
  });

  $(".finishedButton").click(function(){
    $(this).parent().parent().detach().appendTo(".list_finished");
    updateArrays($(this).parent().parent().attr("taskno"));
    $(this).parent().remove();
    updateTaskCount();
  });

  $("li").mouseover(function(){
    $(this).find("button").show();
  })

  $("li").mouseout(function(){
    $(this).find("button").hide();
  })

});

function updateTaskCount(){
    $('#finishedTasksCount').html(finished_task_array.length);
    $('#unfinishedTasksCount').html(unfinished_task_array.length);
 };

function display_element(task_des,task_no,fou){
    li=$('.'+fou+'_'+'hidden').clone(true);
    li.removeClass("d-none");
    li.addClass("d-flex");
    li.removeClass(fou+"_hidden");
    li.find("h6").html("Task "+task_no);
    li.find("small").html(task_des);
    li.attr("taskno",task_no);
    $(".list_"+fou).append(li);
    updateTaskCount();
}

function updateArrays(taskno){
  for(i=0;i<unfinished_task_array.length;i++){
    if(unfinished_task_array[i][1]== parseInt(taskno)){
      finished_task_array.push([unfinished_task_array[i][0],unfinished_task_array[i][1]]);
      unfinished_task_array.splice(i,1);
    }
  }
}
