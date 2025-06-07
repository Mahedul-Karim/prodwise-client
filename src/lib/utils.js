import axios from "axios";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { BASE_URL } from "./constants";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const formateDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export const axiosInstace = axios.create({
  baseURL: BASE_URL,
  validateStatus: (status) => status < 510,
  withCredentials:true
});
