function loop_size(node){
  let tabNode= [node];
  let index=0;
  while(!tabNode.includes(node.next)){
    node=node.next;
    tabNode.push(node)
   index++;
  }  
  return index-tabNode.indexOf(node.next)+1;
}