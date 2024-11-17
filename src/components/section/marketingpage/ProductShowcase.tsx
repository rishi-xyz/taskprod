import productImage from "@/assests/productImage.png";
import Image from "next/image";

const ProductShowcase: React.FC = () => {
  return (
    <section
      id="features"
      className="py-15 md:py-28 bg-[radial-gradient(ellipse_200%_100%_at_top_left,#8B4513,#F5F5DC_80%)]"
    >
      <div className="container px-4 mx-auto">
        {/* Header Section */}
        <div className="max-w-[540px] mx-auto text-center">
          <div className="flex justify-center rounded-2xl py-1 ">
            <div className="tag">
              Boost your productivity
            </div>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter mt-5 text-transparent bg-clip-text bg-gradient-to-b from-[#4B2E15] to-[#8B4513]">
            A more efficient and streamlined way to keep track of your tasks
          </h2>
          <p className="text-[22px] leading-[30px] mt-5 text-[#4B2E15]">
            Efficiently increase your workflow productivity using this simple-to-use, fully functional, and responsive task manager.
          </p>
        </div>

        {/* Product Image Section */}
        <div className="relative flex justify-center mt-10">
          <Image
            src={productImage}
            alt="Task Manager Product Showcase"
            className="border-solid border-8 border-[#4B2E15] rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;