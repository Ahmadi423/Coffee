
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function MonteRojoHome() {
  return (
    <div className="bg-[#f8f3ef] text-[#2b2b2b] min-h-screen font-sans">
      <header className="px-8 py-6 flex justify-between items-center border-b">
        <h1 className="text-2xl font-bold tracking-tight">Monte Rojo Coffee</h1>
        <Button variant="outline">Shop Beans</Button>
      </header>

      <section className="px-8 py-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.img 
          src="/monte-rojo-logo.png" 
          alt="Monte Rojo Coffee Logo" 
          className="w-full max-w-sm mx-auto" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        />
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Red Mountains. Rich Coffee.</h2>
          <p className="text-lg mb-4">
            Handpicked in the highlands of Colombia, our beans are directly sourced from smallholder farms and roasted in small batches in Southern California. 
          </p>
          <p className="text-md mb-6">
            Monte Rojo isn’t just coffee. It’s a story of lifelong friendship, ethical trade, and bold, authentic flavor.
          </p>
          <Button size="lg">Learn More</Button>
        </motion.div>
      </section>

      <section className="bg-[#e9ded3] px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Join Our Coffee Circle</h3>
          <p className="mb-6">Get early access to product drops, discounts, and stories from the farm to the roastery.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Input placeholder="Enter your email" className="w-full max-w-md" />
            <Button><Mail className="mr-2 h-4 w-4" /> Subscribe</Button>
          </div>
        </div>
      </section>

      <footer className="px-8 py-10 text-center text-sm text-muted-foreground border-t">
        © {new Date().getFullYear()} Monte Rojo Coffee. Crafted with care in Colombia & California.
      </footer>
    </div>
  );
}
