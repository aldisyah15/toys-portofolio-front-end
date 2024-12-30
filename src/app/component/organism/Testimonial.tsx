import test from "node:test";
import TestimoniComponent from "../molecules/TestimoniComponent";

export default function Testimonial() {
    const comments = [
        {
         Image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
          name: "Aliya",
          purchasedItem: "Remote Control Car",
          commentTime: "one week ago",
          comment: "Mainannya sangat bagus, anak saya suka sekali! Kualitasnya juga oke."
        },
        {
            Image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
          name: "Budi",
          purchasedItem: "Lego Building Blocks",
          commentTime: "3 days ago",
          comment: "Lego-nya sesuai dengan deskripsi. Anak-anak jadi lebih kreatif!"
        },
        {
            Image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
          name: "Citra",
          purchasedItem: "Stuffed Teddy Bear",
          commentTime: "yesterday",
          comment: "Boneka teddy bear ini sangat lembut dan lucu. Cocok untuk kado!"
        },
        {
            Image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
          name: "Dimas",
          purchasedItem: "Toy Robot",
          commentTime: "2 weeks ago",
          comment: "Robot mainannya bagus, tapi baterainya agak cepat habis."
        },
        {
            Image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
          name: "Eka",
          purchasedItem: "Miniature Train Set",
          commentTime: "5 hours ago",
          comment: "Kereta miniatur ini keren sekali, detailnya luar biasa. Anak-anak suka bermain setiap hari!"
        }
      ];
      
    return (
        <div className="pt-5 w-full ">
            <h1 className=" text-4xl font-orbitron flex justify-center text-center">Testimonials from buyers</h1>
            <div className="flex justify-center flex-wrap gap-5 pt-3">
           {comments.map((testi, index) => (
                 <TestimoniComponent Key={index}  imageProfile={testi.Image} name={testi.name} item={testi.purchasedItem} relativeTime={testi.commentTime} comment={testi.comment}/>
           ))}
            </div>
        </div>
    )
};
