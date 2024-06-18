import "../css/style2.css"
import Navbar from "../partials/Navbar";

const Services = () => {
    return (<>
        <Navbar/>
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/" style={{ textDecoration: 'none' }}>
                  Trang chủ
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Dịch vụ
              </li>
            </ol>
          </nav>
      
          <div className="row">
            <div className="col-12">
              <article>
                <h1 className="text-danger">
                  <strong>WORKSHOP TÁI CHẾ CÙNG TADAH&nbsp;</strong>
                </h1>
                <p>
                  Tái chế không còn mới mẻ với mỗi chúng ta, đặc biệt khi môi
                  trường sống ngày càng ô nhiễm. Với các bạn nhỏ, nhận biết và
                  hành động vì môi trường là điều rất quan trọng. Mỗi chiến binh
                  nhí đều có thể tham gia bảo vệ Trái đất.
                </p>
                <p>
                  Tadah cung cấp dịch vụ Workshop tái chế các vật dụng như lõi
                  giấy hay vỏ chai nhựa thành đồ chơi, trang trí. Trong Workshop,
                  con được hướng dẫn cách làm đồ và tự tay trang trí.
                </p>
                <p>
                  Về vật dụng và nguyên liệu trong Workshop, Tadah sẽ chuẩn bị sẵn
                  tùy theo số lượng người tham dự. Workshop thích hợp tổ chức quy
                  mô vừa và nhỏ trong các công ty, tổ chức nhằm kết nối gia đình,
                  thêm hoạt động cho công nhân viên và gắn kết đội, nhóm.
                </p>
                <p>
                  Anh/ chị quan tâm dịch vụ này liên hệ Tadah để biết thêm chi
                  tiết nhé!
                </p>
                <div className="text-center my-4">
                  <img
                    src="img/version10-2048x1365.jpg"
                    className="img-fluid"
                    alt="Workshop 1"
                  />
                  <img
                    src="img/version20-2048x1365.jpg"
                    className="img-fluid"
                    alt="Workshop 2"
                  />
                  <img
                    src="img/version10-2048x1365.jpg"
                    className="img-fluid"
                    alt="Workshop 3"
                  />
                </div>
                <h1 className="text-danger">
                  <strong>WORKSHOP THỦ CÔNG&nbsp;</strong>
                </h1>
                <p>
                  Tadah cung cấp dịch vụ tổ chức, hướng dẫn làm đồ thủ công (làm
                  tranh, làm hoa, làm đèn ông sao,…) đến mọi đối tượng. Tìm hiểu
                  về dịch vụ liên hệ Tadah để biết thêm thông tin!
                </p>
                <h1 className="text-danger">
                  <strong>VÌ SAO BẠN NÊN LỰA CHỌN DỊCH VỤ TỪ TADAH?</strong>
                </h1>
                <p>
                  Bạn biết không, tổ chức các buổi Workshop cho trẻ em là một cách
                  thể hiện sự quan tâm của công ty tới tâm tư và cuộc sống của
                  nhân viên. Thông qua hoạt động này, các gia đình trong nội bộ
                  được gặp gỡ, giao lưu; phụ huynh dành thời gian cùng con. Mà các
                  bạn nhỏ cũng trải qua thời gian vui vẻ, ấm áp và đầy bổ ích nữa!
                </p>
                <p>
                  Cập nhật các sự kiện Tadah tổ chức tại đây:&nbsp;
                  <a
                    href="https://tadahdiy.com/category/tin-tuc/"
                    target="_blank"
                    rel="noopener"
                    style={{ textDecoration: 'none' }}
                  >
                    Tin tức{" "}
                  </a>
                </p>
                <h2>
                  <strong>HỘP SÁNG TẠO TADAH</strong>
                </h2>
                <p>
                  <span role="img" aria-label="home">🏠</span> Số 2 ngõ 136 Tam Trinh, Yên Sở, Hoàng Mai, Hà Nội
                </p>
                <p>
                  <span role="img" aria-label="email">📬</span> tadahdiy@gmail.com
                </p>
                <p>
                  <span role="img" aria-label="phone">☎️</span> 082 685 2222 – 024 39938436
                </p>
                <p>
                  📌 Facebook:&nbsp;
                  <a
                    href="https://www.facebook.com/tadahdiyhopsangtao/?ref=pages_you_manage"
                    target="_blank"
                    rel="noopener"
                    style={{ textDecoration: 'none' }}
                  >
                    Tadah – Hộp sáng tạo
                  </a>
                </p>
              </article>
            </div>
          </div>
        </div>
      </>
      )
}

export default Services;