import TestimoniComponent from "../molecules/TestimoniComponent";

export default function Testimonial() {
    const comments = [
        {
         Image: "https://img.freepik.com/free-psd/portrait-girl-teenager_23-2151717388.jpg?ga=GA1.1.1069127498.1732985300&semt=ais_hybrid", 
          name: "Aliya",
          purchasedItem: "Remote Control Car",
          commentTime: "one week ago",
          comment: "Mainannya sangat bagus, anak saya suka sekali! Kualitasnya juga oke."
        },
        {
            Image: "https://img.freepik.com/free-psd/portrait-man-teenager-isolated_23-2151745763.jpg?semt=ais_hybrid", 
          name: "Budi",
          purchasedItem: "Lego Building Blocks",
          commentTime: "3 days ago",
          comment: "Lego-nya sesuai dengan deskripsi. Anak-anak jadi lebih kreatif!"
        },
        {
            Image: "https://img.freepik.com/free-photo/smiling-man_1098-12728.jpg?ga=GA1.1.1069127498.1732985300&semt=ais_hybrid", 
          name: "Citra",
          purchasedItem: "Stuffed Teddy Bear",
          commentTime: "yesterday",
          comment: "Boneka teddy bear ini sangat lembut dan lucu. Cocok untuk kado!"
        },
        {
            Image: "https://img.freepik.com/premium-photo/portrait-happy-young-asian-man-with-braces-smiling_251136-46876.jpg?ga=GA1.1.1069127498.1732985300&semt=ais_hybrid", 
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
                 <TestimoniComponent key={index}  imageProfile={testi.Image} name={testi.name} item={testi.purchasedItem} relativeTime={testi.commentTime} comment={testi.comment}/>
           ))}
            </div>
        </div>
    )
};
