import {
  InputControl,
  TextAreaControl,
  SelectControl,
} from '../Forms/FormControls.jsx';
import styles from './Dashboard.css';

export default function Dashboard() {
  return (
    <div className={styles.Dashboard}>
      <form>
        <InputControl
          label="Name"
          name="name"
          placeholder="your name"
        />

        <InputControl
          label="Date"
          required
          type="date"
          name="date"
          placeholder="pick a date"
        />

        <TextAreaControl
          label="Bio"
          name="bio"
          placeholder="tell us about yourself"
        />
        <SelectControl
          label="Plant"
          required
          name="plant"
          placeholder="select a plant"
        >
          <option value="1">Bamboo</option>
          <option value="2">Cactus</option>
          <option value="3">Orchid</option>
        </SelectControl>
      </form>
    </div>
  );
}
