import React, { useState } from "react";
import { ArrowLeft, Calendar, Star, Shield } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import MiniTable from "../components/MiniTable";
import Selector from "../components/Selector";
import Cards from "../components/Cards";
import Aim from "../../public/assets/icons/Aim.svg";
import Avatar from "../../public/assets/images/Avatar.png";

const CardsData = [
  { icon: Aim, userNumber: "Goal", total: "Fat Loss" },
  { icon: Aim, userNumber: "Goal", total: "Fat Loss" },
  { icon: Aim, userNumber: "Goal", total: "Fat Loss" },
  { icon: Aim, userNumber: "Goal", total: "Fat Loss" },
];

const UserDetail = () => {
  const [selectedGoal, setSelectedGoal] = useState("fat_loss");

  const goalOptions = [
    { label: "Fat Loss", value: "fat_loss" },
    { label: "Muscle Gain", value: "muscle_gain" },
    { label: "Longevity", value: "longevity" },
    { label: "Better Sleep", value: "sleep" },
  ];

  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="">
      <div>
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4 min-w-0">
            <button
              className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <h1 className="text-2xl font-bold text-gray-900 break-words">
              User Detail View
            </h1>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span>Nov 23 - Nov 29</span>
          </div>
        </div>

        {/* User Summary */}
        <div className="bg-white py-5 px-4 border border-[#0000001A] rounded-[12px]">
          <div className="bg-white rounded-[20px] p-5 mb-6 border border-[#25252512]">
            <h2 className="text-[20px] text-black font-bold mb-6">
              User Summary
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left side */}
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <img
                    src={Avatar}
                    alt="Lydia Press"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">Lydia Press</h3>
                    <p className="text-sm text-gray-500">
                      hello@hourglassinc.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-700">User Rank</span>
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-orange-400 text-orange-400"
                      />
                    ))}
                    <Star className="w-4 h-4 text-gray-300" />
                  </div>
                </div>
              </div>

              {/* Right side */}
              <div className="space-y-4 bg-[#F7F7F7] rounded-2xl px-2.5">
                <div className="flex items-center justify-between py-2.5 border-b border-[#0000001A]">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-700">Plan</span>
                  </div>
                  <span className="text-sm font-medium text-blue-600">
                    Free
                  </span>
                </div>

                <div className="flex items-center justify-between py-2.5 border-b border-[#0000001A]">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Status</span>
                  </div>
                  <span className="text-sm font-medium text-green-600">
                    Active
                  </span>
                </div>

                <div className="flex items-center justify-between py-2.5">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-700">Last Active</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    July 14, 2025
                  </span>
                </div>
              </div>
            </div>

            <MiniTable />
          </div>

          {/* Admin Actions */}
          <div className="bg-white rounded-[20px] p-5 mb-6 border border-[#25252512]">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Admin Actions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {Array(4)
                .fill(null)
                .map((_, i) => (
                  <Selector
                    key={i}
                    label=""
                    options={goalOptions}
                    value={selectedGoal}
                    onChange={setSelectedGoal}
                  />
                ))}
            </div>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {CardsData.map((card, index) => (
              <Cards
                key={index}
                icon={card.icon}
                userNumber={card.userNumber}
                total={card.total}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
