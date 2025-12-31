"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

interface Supporter {
  supporter_name: string;
  support_coffees: number;
  support_note?: string;
  support_amount: number;
}

interface SupportersModalProps {
  isOpen: boolean;
  onClose: () => void;
  supporters: Supporter[];
  loading: boolean;
}

const SupportersModal: React.FC<SupportersModalProps> = ({
  isOpen,
  onClose,
  supporters,
  loading,
}) => {
  const totalValue = supporters.reduce((sum, s) => sum + s.support_amount, 0);
  const totalSupporters = supporters.length;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/85 backdrop-blur-[10px] flex items-center justify-center z-[20000] p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#111b21] w-full md:w-[600px] rounded-xl shadow-2xl border border-[#2a3942] relative overflow-hidden max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="p-4 border-b border-[#2a3942] flex justify-between items-start bg-[#202c33]">
              <div>
                <h2 className="text-md font-semibold text-[#e9edef]">
                  Meet Our Supporters
                </h2>
                {!loading && (
                  <p className="text-[#8696a0] text-sm mt-1">
                    {totalSupporters} supporters • ${totalValue} total support
                  </p>
                )}
              </div>
              <button
                onClick={onClose}
                className="text-[#8696a0] hover:bg-white/10 p-2 rounded transition-colors"
              >
                <IoClose size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto overflow-x-hidden flex-1">
              {loading ? (
                <div className="flex flex-col items-center gap-6 py-10">
                  <div className="w-16 h-16 border-4 border-gray-700 border-t-[#25d366] rounded-full animate-spin" />
                  <p className="text-[#e9edef] text-lg font-bold">
                    Loading supporters...
                  </p>
                </div>
              ) : supporters.length > 0 ? (
                <div className="space-y-3">
                  {supporters.map((supporter, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-[#202c33] rounded-lg p-4 border border-[#2a3942] hover:border-[#25d366] transition-colors cursor-default"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-sm font-semibold text-[#e9edef]">
                            {supporter.supporter_name}
                          </h3>
                          {supporter.support_note && (
                            <p className="text-xs text-[#8696a0] mt-2">
                              {supporter.support_note}
                            </p>
                          )}
                        </div>
                        <div className="ml-4 flex-shrink-0 text-right">
                          <div className="text-[#25d366] font-bold text-sm">
                            ☕ × {supporter.support_coffees}
                          </div>
                          <div className="text-[#8696a0] text-xs">
                            ${supporter.support_amount}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-[#8696a0]">
                    No supporters yet. Be the first!
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-[#2a3942] p-4 bg-[#202c33]">
              <a
                href="https://www.buymeacoffee.com/whatsappwrapped"
                target="_blank"
                rel="noreferrer"
                className="block w-full bg-[#25d366] text-[#111b21] font-semibold py-2 px-4 rounded-lg text-center text-sm hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-shadow"
              >
                Become a Supporter
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SupportersModal;
