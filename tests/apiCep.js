import http from "k6/http";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  thresholds: {
    http_req_duration: ["p(95)<150"],
  },
  vus: 10,
  duration: "10s",
};

export default function () {
  http.get("https://viacep.com.br/ws/09920450/json/");
}

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}
