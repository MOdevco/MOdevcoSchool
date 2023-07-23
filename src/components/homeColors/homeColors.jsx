import { Box } from '@chakra-ui/react'
import ColorCards from '../colorCards/colorCards'

const HomeColors = () => {
    
  return (
    <Box width={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} >
        <Box display={'flex'} gap={'40px'} flexDirection={{base: 'column' ,md: 'row'}} >
            <ColorCards cardBg={'#D3D3D3'} copy={'#D3D3D3'} copyColor={'#D3D3D'} title={'LightGrey'} textColor={'#000'} colorName={'#D3D3D3'} />
            <ColorCards cardBg={'#00FFFF'} copy={'#00FFFF'} copyColor={'#00FFFF'}  title={'Aqua'} textColor={'#000'} colorName={'#00FFFF'} />
            <ColorCards cardBg={'#A52A2A'} copy={'#A52A2A'} copyColor={'#A52A2A'}  title={' Brown'} textColor={'#000'} colorName={'#A52A2A'} />
        </Box>
        <Box display={'flex'} gap={'40px'} flexDirection={{base: 'column' ,md: 'row'}} >
            <ColorCards cardBg={'#0000FF'} copy={'#0000FF'} copyColor={'#0000FF'} title={'Blue'} textColor={'#000'} colorName={'#0000FF'} />
            <ColorCards cardBg={'#D2691E'} copy={'#D2691E'} copyColor={'#D2691E'}  title={'Chocolate'} textColor={'#000'} colorName={'#D2691E'} />
            <ColorCards cardBg={'#A9A9A9'} copy={'#A9A9A9'} copyColor={'#A9A9A9'}  title={' DarkGrey '} textColor={'#000'} colorName={'#A9A9A9'} />
        </Box>
        <Box display={'flex'} gap={'40px'} flexDirection={{base: 'column' ,md: 'row'}} >
            <ColorCards cardBg={'#E9967A'} copy={'#E9967A'} copyColor={'#E9967A'} title={' DarkSalmon'} textColor={'#000'} colorName={'#E9967A'} />
            <ColorCards cardBg={'#8B008B'} copy={'#8B008B'} copyColor={'#8B008B'}  title={'DarkMargenta'} textColor={'#fff'} colorName={'#8B008B'} />
            <ColorCards cardBg={'#DC143C'} copy={'#DC143C'} copyColor={'#DC143C'}  title={' Crimson '} textColor={'#000'} colorName={'#DC143C'} />
        </Box>
        <Box display={'flex'} gap={'40px'} flexDirection={{base: 'column' ,md: 'row'}} >
            <ColorCards cardBg={'#008000'} copy={'#008000'} copyColor={'#008000'} title={' Green'} textColor={'#fff'} colorName={'#008000'} />
            <ColorCards cardBg={'#FFD700'} copy={'#FFD700'} copyColor={'#FFD700'}  title={'Gold'} textColor={'#000'} colorName={'#FFD700'} />
            <ColorCards cardBg={'#FF69B4'} copy={'#FF69B4'} copyColor={'#FF69B4'}  title={' HotPink '} textColor={'#000'} colorName={'#FF69B4'} />
        </Box>
        <Box display={'flex'} gap={'40px'} flexDirection={{base: 'column' ,md: 'row'}} >
            <ColorCards cardBg={'#800000'} copy={'#800000'} copyColor={'#800000'} title={' Maroon'} textColor={'#fff'} colorName={'#800000'} />
            <ColorCards cardBg={'#191970'} copy={'#191970'} copyColor={'#191970'}  title={'MidNightBlue'} textColor={'#fff'} colorName={'#191970'} />
            <ColorCards cardBg={'#FFA500'} copy={'#FFA500'} copyColor={'#FFA500'}  title={' Orange '} textColor={'#000'} colorName={'#FFA500'} />
        </Box>
        <Box display={'flex'} gap={'40px'} flexDirection={{base: 'column' ,md: 'row'}} >
            <ColorCards cardBg={'#DA70D6'} copy={'#DA70D6'} copyColor={'#DA70D6'} title={' Orchid'} textColor={'#fff'} colorName={'#DA70D6'} />
            <ColorCards cardBg={'#98FB98'} copy={'#98FB98'} copyColor={'#98FB98'}  title={'PaleGreen'} textColor={'#000'} colorName={'#98FB98'} />
            <ColorCards cardBg={'#CD853F'} copy={'#CD853F'} copyColor={'#CD853F'}  title={' Peru '} textColor={'#000'} colorName={'#CD853F'} />
        </Box>
        <Box display={'flex'} gap={'40px'} flexDirection={{base: 'column' ,md: 'row'}} >
            <ColorCards cardBg={'#FA8072'} copy={'#FA8072'} copyColor={'#FA8072'} title={' Salmon'} textColor={'#000'} colorName={'#FA8072'} />
            <ColorCards cardBg={'#FF0000'} copy={'#FF0000'} copyColor={'#FF0000'}  title={' REd'} textColor={'#000'} colorName={'#FF0000'} />
            <ColorCards cardBg={'#6A5ACD'} copy={'#6A5ACD'} copyColor={'#6A5ACD'}  title={' SlateBlue '} textColor={'#fff'} colorName={'#6A5ACD'} />
        </Box>
        <Box display={'flex'} gap={'40px'} flexDirection={{base: 'column' ,md: 'row'}} >
            <ColorCards cardBg={'#FFFF00'} copy={'#FFFF00'} copyColor={'#FFFF00'} title={' Yellow'} textColor={'#000'} colorName={'#FFFF00'} />
            <ColorCards cardBg={'#FF6347'} copy={'#FF6347'} copyColor={'#FF6347'}  title={' Tomato'} textColor={'#000'} colorName={'#FF6347'} />
            <ColorCards cardBg={'#708090'} copy={'#708090'} copyColor={'#708090'}  title={' SlateGrey '} textColor={'black'} colorName={'#708090'} />
        </Box>
        <Box display={'flex'} gap={'40px'} flexDirection={{base: 'column' ,md: 'row'}} >
            <ColorCards cardBg={'#008080'} copy={'#008080'} copyColor={'#008080'} title={' Teal'} textColor={'#000'} colorName={'#008080'} />
            <ColorCards cardBg={'#FFFF'} copy={'#FFFFFF'} copyColor={'#FFFFFF'}  title={' White'} textColor={'#000'} colorName={'#FFFFFF'} />
            <ColorCards cardBg={'#9ACD32'} copy={'#9ACD32'} copyColor={'#9ACD32'}  title={' YellowGreen '} textColor={'#fff'} colorName={'#9ACD32'} />
        </Box>
        <Box display={'flex'} gap={'40px'} flexDirection={{base: 'column' ,md: 'row'}} >
            <ColorCards cardBg={'#C0C0C0'} copy={'#C0C0C0'} copyColor={'#C0C0C0'} title={'  Silver'} textColor={'#000'} colorName={'#C0C0C0'} />
            <ColorCards cardBg={'#DDA0DD'} copy={'#DDA0DD'} copyColor={'#DDA0DD'}  title={' Plum'} textColor={'#000'} colorName={'#DDA0DD'} />
            <ColorCards cardBg={'#4682B4'} copy={'#4682B4'} copyColor={'#4682B4'}  title={'  SteelBlue '} textColor={'#fff'} colorName={'#4682B4'} />
        </Box>
    </Box>
  )
}

export default HomeColors