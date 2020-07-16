let initState = [
    {
        id: 1 ,
        name : "Iphone 7 plus",
        image: "https://vn-test-11.slatic.net/p/663392b042a88e4842058bb23886e25a.jpg_720x720q80.jpg_.webp",
        description: "Sản phẩm do apple sản xuất",
        price: 100000,
        inventory : 10,
        rate : 5
    },
    {
        id: 2 ,
        name : "Samsung galaxy S10 plus",
        image: "https://www.xtmobile.vn/vnt_upload/product/Hinh_DT/thumbs/(600x600)_crop_600_600_note_10_black_800x800_min_5.jpg",
        description: "Sản phẩm do china sản xuất",
        price: 50000,
        inventory : 10,
        rate : 4
    },
    {
        id: 3 ,
        name : "Oppo J7",
        image: "https://cdn.tgdd.vn/Products/Images/42/73669/Slider/oppo-neo-7-1.jpg",
        description: "Sản phẩm do korea sản xuất",
        price: 80000,
        inventory : 10,
        rate : 3
    }
]
const myReducer = (state = initState , action) => {

    switch(action.type)
    {
        
        default : 
            return [...state];
    }
}

export default myReducer;