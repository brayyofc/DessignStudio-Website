import { Card, Typography, Chip } from "@material-tailwind/react";

function Services() {
  const services = [
    {
      title: "Pixel Perfect UI / UX Design",
      icon: "https://via.placeholder.com/50?text=UI",
      new: true,
    },
    {
      title: "Custom Web Development",
      icon: "https://via.placeholder.com/50?text=Web",
    },
    {
      title: "Secure & Scalable Hosting",
      icon: "https://via.placeholder.com/50?text=Host",
    },
    {
      title: "Artificial Intelligence",
      icon: "https://via.placeholder.com/50?text=AI",
    },
    {
      title: "iOS & Android Mobile Apps",
      icon: "https://via.placeholder.com/50?text=App",
    },
    {
      title: "Animated Explainer Videos",
      icon: "https://via.placeholder.com/50?text=Video",
    },
    {
      title: "Latest Emerging Technologies",
      icon: "https://via.placeholder.com/50?text=Tech",
    },
  ];

  return (
    <div className=" flex flex-col md:flex-row items-center justify-center py-16 px-8 bg-white space-y-8 md:space-y-0 md:space-x-8">
      {/* Left Section */}
      <div className="text-left md:w-1/3 space-y-2">
        <h2 className="text-3xl lg:text-5xl font-bold text-indigo-900 leading-tight">
          LEARN MORE ABOUT OUR
        </h2>
        <h2 className="text-3xl lg:text-5xl font-bold text-pink-500">
          SERVICES
        </h2>
      </div>

      {/* Right Section */}
      <div className="md:flex">
        <div>
          <Card className=" h-full">
            <img
              src={services[0].icon}
              alt={services[0].title}
              className="w-16 h-16 mb-4"
            />
            <Typography className="text-pink-500 font-semibold text-center text-lg">
              {services[0].title.toUpperCase()}
            </Typography>
          </Card>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:w-2/3">
          {services.map((service, index) =>
            index ? (
              <Card
                key={index}
                className="relative flex flex-col items-center p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {service.new && (
                  <Chip
                    value="NEW"
                    className="absolute top-2 right-2 bg-indigo-900 text-white font-semibold text-xs"
                  />
                )}
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-16 h-16 mb-4"
                />
                <Typography className="text-pink-500 font-semibold text-center text-lg">
                  {service.title.toUpperCase()}
                </Typography>
              </Card>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Services;
