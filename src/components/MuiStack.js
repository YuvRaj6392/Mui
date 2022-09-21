import React from 'react'
import { Stack,Box,Divider} from '@mui/material';
export default function MuiStack() {
  return (
    <div>
      <Stack direction="row" divider={<Divider orientation='vertical' flexItem />}>
            <Box>
                code
            </Box>
            <Box>
                revolution
            </Box>
      </Stack>
    </div>
  )
}
