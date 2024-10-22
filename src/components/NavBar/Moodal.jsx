"use client";
import React, { useState } from "react";
import { Button, Modal, Select } from "flowbite-react";
import { motion } from "framer-motion";
import { Label, Textarea } from "flowbite-react";

const Moodal = () => {
  const [addComment, setAddComment] = useState("");

  const [openModal, setOpenModal] = useState("");
  const [modalPlacement, setModalPlacement] = useState("center");
  const props = { modalPlacement, openModal, setModalPlacement, setOpenModal };

  return (
    <>
      <div className="flex flex-wrap gap-4">
        {/* <div className="w-40">
          <Select
            defaultValue="center"
            onChange={(event) => props.setModalPlacement(event.target.value)}
          >
            <option value="center">Center</option>
            <option value="top-left">Top left</option>
            <option value="top-center">Top center</option>
            <option value="top-right">Top right</option>
            <option value="center-left">Center left</option>
            <option value="center-right">Center right</option>
            <option value="bottom-right">Bottom right</option>
            <option value="bottom-center">Bottom center</option>
            <option value="bottom-left">Bottom left</option>
          </Select>
        </div> */}
        <Button onClick={() => props.setOpenModal("placement")}>
          Post a Comment
        </Button>
      </div>
      <Modal
        show={props.openModal === "placement"}
        position={props.modalPlacement}
        onClose={() => props.setOpenModal(undefined)}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.9,
            delay: 0.7,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className=""
        >
          <Modal.Header>Post a Comment</Modal.Header>
          <Modal.Body>
            <div className="space-y-6 p-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Tell us what you think
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400"></p>
              <form>
                <div className=" max-w-auto" id="textarea">
                  <div className="mb-2 block">
                    <Label htmlFor="comment" value="Your message" />
                  </div>
                  <Textarea
                    id="comment"
                    placeholder="Leave a comment..."
                    // value={addComment}
                    // onChange={(event) => setAddComment(event.target.value)}
                    required
                    rows={4}
                  />
                </div>
              </form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => props.setOpenModal(undefined)}>POST</Button>
            <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
              CLOSE
            </Button>
          </Modal.Footer>
        </motion.div>
      </Modal>
    </>
  );
};

export default Moodal;
