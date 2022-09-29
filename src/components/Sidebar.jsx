import {Stack} from "@mui/material";
import {categories} from '../utils/constants';

const selectedCategory = 'New';

const Sidebar = ({ selectedCategory, setSelectedCategory}) => (
    <Stack
    direction="row"
    sx={{
        overflowY: "auto",
        height: {sx: 'auto', md: '95%'},
        flexDirection: {md: 'column'},
    }}>
     {categories.map((category) => (
        <button
        className="category-btn"
        style={{
            background: category.name ===
            selectedCategory && '#FC1503',
            color: 'orange'
        }}
        key={category.name}>
            <span style={{color: category.name === selectedCategory ? 'orange' : 'red', marginRight: '5px'}}>{category.icon}</span>
            <span>{category.name}</span>
        </button>
     ))}

    </Stack>
  )


export default Sidebar
