import { FaClipboardList, FaCheckCircle, FaHourglassHalf } from "react-icons/fa"; // İkonlar
import Card from "../ui/dashboard/card/Card";
import Chart from "../ui/dashboard/chart/Chart";
import styles from "../ui/dashboard/dashboard.module.css";
import Rightbar from "../ui/dashboard/rightbar/Rightbar";
import Transactions from "../ui/dashboard/transactions/Transactions";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {/* İkonları Card bileşenine props olarak gönderiyoruz */}
          <Card
            icon={<FaClipboardList size={24} />}
            title="Bütün sifarişlər"
            number="12.231"
            difference="15"
            isPositive={true}
          />
          <Card
            icon={<FaCheckCircle size={24} />}
            title="Tamamlanmış sifarişlər"
            number="9.876"
            difference="5"
            isPositive={true}
          />
          <Card
            icon={<FaHourglassHalf size={24} />}
            title="Gözləyən sifarişlər"
            number="2.355"
            difference="8"
            isPositive={false}
          />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
