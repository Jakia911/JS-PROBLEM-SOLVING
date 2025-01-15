class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }

  function addTwoNumbers(l1, l2) {
    let dummy = new ListNode(0); 
    let current = dummy;      
    let carry = 0;   
    
    while (l1 !== null || l2 !== null) {
     
      let x = l1 ? l1.val : 0;
      let y = l2 ? l2.val : 0;
  
    
      let sum = x + y + carry;
      carry = Math.floor(sum / 10); 
      let digit = sum % 10;       
  
    
      current.next = new ListNode(digit);
      current = current.next;
  
     
      if (l1) l1 = l1.next;
      if (l2) l2 = l2.next;
  }
  
  }
}
