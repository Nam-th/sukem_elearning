import Image from 'next/image';
import Link from 'next/link';

// Định nghĩa interface Props với course kiểu Course
interface Props {
  course: Course;
}

// Component hiển thị thông tin chi tiết của từng khóa học
const CourseCard: React.FC<Props> = ({ course }) => {
  // Destructure các thuộc tính từ course
  const {
    image,
    category,
    author,
    avatar,
    name,
    price,
    sale,
    time,
    classes,
  } = course;

  return (
    // Thẻ bao ngoài của card, có hiệu ứng hover để dịch chuyển và scale
    <div className="group bg-white rounded-2xl overflow-hidden text-black duration-300 hover:-translate-y-4 hover:scale-105">
      
      {/* Phần chứa hình ảnh của khóa học */}
      <a
        href="#"
        className="relative block h-96 overflow-hidden rounded-lg p-6"
      >
        <Image
          src={image} // Đường dẫn đến ảnh của khóa học
          width={1000}
          height={1000}
          layout="responsive" // Đảm bảo hình ảnh responsive
          loading="lazy" // Tải ảnh lười để tăng hiệu suất
          alt={name} // Mô tả alt cho ảnh
          className="w-full object-cover transition duration-200 rounded-lg"
        />
      </a>

      {/* Phần chứa thông tin chi tiết khóa học */}
      <div className="flex flex-col gap-1 rounded-b-lg bg-white p-5">
        
        {/* Thông tin chung về khóa học: danh mục, tên, tác giả */}
        <div className="flex flex-col">
          {/* Danh mục khóa học */}
          <p className="uppercase font-light text-[#434EC4] pb-3">
            {category}
          </p>

          {/* Tên khóa học, có hiệu ứng hover */}
          <a
            href="#"
            className="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-2xl"
          >
            {name}
          </a>

          {/* Tác giả khóa học kèm avatar */}
          <span className="text-xl text-gray-500 py-4">
            <Image
              src={avatar} // Avatar của tác giả
              alt="h" // Alt text cho avatar
              width={100}
              height={100}
              className="mb-1 mr-1 w-6 h-6 rounded-full inline-block"
            />{' '}
            by {author}
          </span>
        </div>

        {/* Các thông tin ngắn gọn: thời gian, số lớp, doanh số bán */}
        <div className="flex justify-evenly text-xl text-gray-500">
          <span>{time}</span> {/* Thời lượng của khóa học */}
          <span>{classes} classes</span> {/* Số lớp học */}
          <span>{sale} sales</span> {/* Số lượt bán */}
        </div>

        {/* Phần chứa giá cả và nút Enroll */}
        <div className="flex justify-between items-center pt-4">
          {/* Hiển thị giá khóa học */}
          <span className="font-bold text-black lg:text-2xl">${price}</span>

          {/* Nút Enroll chuyển hướng đến trang chi tiết */}
          <Link
            href={`#`}
            className="px-10 py-5 border-[1px] border-black font-semibold rounded-lg text-[22px] duration-200 hover:border-[#ffee00] hover:bg-[#ffee00]"
          >
            Enroll
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
