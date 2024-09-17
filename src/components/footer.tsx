import { Facebook, Github, Instagram, Twitter } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  return (
    <footer id="contact" className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-wrap">
          {/* Company Info */}
          <div className="w-full text-center md:w-1/3 md:text-left">
            <h5 className="mb-6 font-bold uppercase">Company</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a href="/about" className="text-gray-600 hover:text-gray-800 hover:underline">
                  About Us
                </a>
              </li>
              <li className="mt-2">
                <a href="/contact" className="text-gray-600 hover:text-gray-800 hover:underline">
                  Contact
                </a>
              </li>
              <li className="mt-2">
                <a href="/careers" className="text-gray-600 hover:text-gray-800 hover:underline">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="w-full text-center md:w-1/3 md:text-left">
            <h5 className="mb-6 font-bold uppercase">Products</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a href="/products" className="text-gray-600 hover:text-gray-800 hover:underline">
                  All Products
                </a>
              </li>
              <li className="mt-2">
                <a href="/pricing" className="text-gray-600 hover:text-gray-800 hover:underline">
                  Pricing
                </a>
              </li>
              <li className="mt-2">
                <a href="/docs" className="text-gray-600 hover:text-gray-800 hover:underline">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          {/* <div className="w-full text-center md:w-1/4 md:text-left">
            <h5 className="mb-6 font-bold uppercase">Support</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a href="/help" className="text-gray-600 hover:text-gray-800 hover:underline">
                  Help Center
                </a>
              </li>
              <li className="mt-2">
                <a href="/terms" className="text-gray-600 hover:text-gray-800 hover:underline">
                  Terms of Service
                </a>
              </li>
              <li className="mt-2">
                <a href="/privacy" className="text-gray-600 hover:text-gray-800 hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div> */}

          {/* Newsletter */}
          <div className="w-full text-center md:w-1/3 md:text-left">
            <h5 className="mb-6 font-bold uppercase">Stay connected</h5>
            <div className="flex flex-col">
              <Input type="email" placeholder="Enter your email" className="mb-2" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Facebook</span>
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Instagram</span>
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-base text-gray-400">© 2024 Next Start. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
