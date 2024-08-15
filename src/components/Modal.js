function Modal({ handleShowModal }) {
    return (
      <div className="fixed inset-0 z-40 flex items-center justify-center min-h-screen" onClick={handleShowModal}>
        {/* Background Overlay */}
        <div className="fixed inset-0 bg-gray-900 opacity-35"></div>
  
        {/* Modal Content */}
        <div className="bg-white p-6 z-10 w-80 h-80 md:w-96 md:h-96">
          <div className="relative w-full h-full">
            <div className="absolute inset-0">
              <iframe
                title="Video"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/3h0_v1cdUIA"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Modal;
  