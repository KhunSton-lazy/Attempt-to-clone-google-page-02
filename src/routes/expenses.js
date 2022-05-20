import { motion } from "framer-motion";




export default function Expenses() {
    return (
      <motion.div style={{ padding: "1rem 0" }}
      initial={{
        x: -30,
        opacity: 0
      }}animate={{
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.25,
          delay: 0.5
        }
      }}

      >
        <h2>Expenses</h2>
      </motion.div>
    );
  }