
type Item = {
id:number;
name:string;
place: {
    kitchen:string,
    bedroom:string,  
    room:string
};
img: string; 
price: number;

} 

const items:Item[] = [
    {
      id: 1,
      name: "Kitchen Knife",
      place: {
        kitchen: '1 kitchen', 
        bedroom:'1 beedrom', 
        room:'3 room'
      },
      img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 43456.11,
    },
    {
      id: 2,
      name: "Bedroom Lamp",
      place: {
        kitchen: '1 kitchen', 
        bedroom:'2 beedrom', 
        room:'3 room'
      },
      img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 43456.11,
    },
    {
      id: 3,
      name: "Living Room Rug",
      place: {
        kitchen: '1 kitchen', 
        bedroom:'3 beedrom', 
        room:'3 room'
      },
      img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 43456.11,
    },
  ];

 export {items};