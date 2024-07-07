import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getItems } from '../services/api';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography } from '@mui/material';
import { Visibility } from '@mui/icons-material';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await getItems();
        if (response.data.success) {
          setItems(response.data.items);
        }
      } catch (error) {
        alert('Error fetching items');
      }
    };

    fetchItems();
  }, []);

  return (
    <div>
      <Typography variant="h5">All Bills</Typography>
      <List>
        {items.map((item) => (
          <ListItem key={item._id} button component={Link} to={`/bill/${item._id}`}>
            <ListItemText primary={item.customerName} secondary={`Amount: Rs.${item.amount}`} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="view" component={Link} to={`/bill/${item._id}`}>
                <Visibility />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ItemList;
