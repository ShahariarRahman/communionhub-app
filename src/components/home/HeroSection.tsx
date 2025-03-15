import { Typography } from "antd";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div>
      <div className="mb-10">
        <Typography.Title className="!text-[4rem] !mt-8 !mb-4 !leading-14 !font-bold">
          Connect Communities
        </Typography.Title>
        <Typography.Title className="!text-[1.2rem] !text-black/50 font-medium">
          Bridging gaps between faiths with tech and a dash of fun!
        </Typography.Title>
      </div>
      <div className="flex flex-col lg:flex-row px-4">
        <div className="my-4 space-y-10">
          <img
            src="data:image/png;base64,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"
            alt=""
            className="object-contain"
          />
          <div className="!text-[3rem] !font-bold">
            <div className="flex space-x-5">
              <span>Unite, Innovate,</span>
              <img
                src="https://communionhub.org/static/media/small-card-1.1e5a2ac892007f821b2a.png"
                alt=""
                className="object-contain"
              />
            </div>
            <div className="flex space-x-5">
              <img
                src="https://communionhub.org/static/media/small-card-2.bd207a83f52c1a02bbc0.png"
                alt=""
                className="object-contain"
              />
              <span>Connect, Inspires</span>
            </div>
            <div className="flex space-x-5">
              <span>Together</span>
              <img
                src="https://communionhub.org/static/media/8-people.f4fdf0bdfd7eeb954b92.png"
                alt=""
                className="object-contain"
              />
            </div>
          </div>
          <p className="!text-[1rem] whitespace-break-spaces lg:max-w-lg">
            Join us to be part of a community where spirituality meets
            innovation. Together, we'll build a world that's more inclusive,
            engaging, and connected than ever before!
          </p>
          <div className="text-left">
            <Link
              to="/upcoming-events"
              className="bg-black/80 text-base w-fit font-semibold text-white/90 px-8 py-3 rounded-2xl whitespace-nowrap flex hover:bg-black/60 hover:scale-105 group delay-50 duration-200"
            >
              <span>Explore Events</span>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAVCAYAAACt4nWrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABtSURBVHgB7ZJBDYAwDEV/HSBhDggOkIAEJEwCEnEwJOCglNDDLmRZ1iU79CU/PfX9Hgo4rTBzlARY80r5I/Uq2L2guYB+FqOMGWVWSZBckoWI7uKGXlPLBiv0NZOKD1jh4lw8dRFn8lPf1BmUB9VQ3VBEatrHAAAAAElFTkSuQmCC"
                alt=""
                className="group-hover:rotate-90 duration-300"
              />
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-8">
          <div className="relative top-14 hover:top-11 duration-300">
            <img
              src="https://communionhub.org/static/media/event-1.e37c47c6656e8a5c0043.avif"
              alt=""
              style={{ aspectRatio: 1 / 1.8 }}
              className="object-cover w-[12rem] rounded-full"
            />
          </div>
          <div className="relative top-2 hover:-top-1 duration-300">
            <img
              src="https://communionhub.org/static/media/event-2.0cb0185956a6cc4d90f8.webp"
              alt=""
              className="object-cover w-[12rem] rounded-full"
              style={{ aspectRatio: 1 / 1.8 }}
            />
          </div>
          <div className="relative -top-10 hover:-top-13 duration-300">
            <img
              src="https://communionhub.org/static/media/event-3.518ca15d6caff0f2e0c9.avif"
              alt=""
              className="object-cover w-[12rem] rounded-full"
              style={{ aspectRatio: 1 / 1.8 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
