import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import { ColorMatcher } from "./src/utils/color-matcher.mjs";
import colorData from "./src/utils/colornames-rgb.json";
import FooterNew from "./src/landing-page/components/FooterNew";
import AboutPage from "./src/landing-page/components/AboutPage";
import DocumentationPage from "./src/landing-page/components/DocumentationPage";
import ContactPage from "./src/landing-page/components/ContactPage";
import PrivacyPolicyPage from "./src/landing-page/components/PrivacyPolicyPage";
import TermsOfServicePage from "./src/landing-page/components/TermsOfServicePage";
import CookiePolicyPage from "./src/landing-page/components/CookiePolicyPage";

// 确保React全局可用
(window as any).React = React;

// 导入LandingPage组件
const LandingPage = () => {
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_BASE_URL || window.location.origin;

  const handleGetStarted = () => {
    navigate('/picker_color');
  };

  return (
    <div style={{ 
      backgroundColor: '#ffffff', 
      color: '#0f172a',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* 英雄区 */}
        <section style={{ 
          textAlign: 'center', 
          padding: '4rem 0'
        }}>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            color: '#0f172a'
          }}>
            Perfect Colors. Every Single Prompt.
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#64748b', 
            maxWidth: '600px', 
            margin: '0 auto 2rem'
          }}>
            Extract. Define. Control. Professional color names and reference URLs designed to eliminate semantic noise in AI art creation
          </p>
        </section>

        {/* 对比展示区 - Wow时刻 */}
        <section style={{ 
          padding: '1rem 0',
          marginBottom: '4rem'
        }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            textAlign: 'center',
            color: '#0f172a'
          }}>
            See the Difference
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#64748b', 
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto 3rem'
          }}>
            Transform your AI art with professional color prompts that deliver precise, stunning results
          </p>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {/* 普通提示词 - ❌ */}
            <div style={{ 
              backgroundColor: '#fef2f2',
              border: '2px solid #fecaca',
              borderRadius: '1rem',
              padding: '2rem',
              position: 'relative'
            }}>
              <div style={{ 
                position: 'absolute',
                top: '-1rem',
                left: '2rem',
                backgroundColor: '#ef4444',
                color: 'white',
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 'bold'
              }}>
                ❌ Ordinary Prompt
              </div>
              <div style={{ marginTop: '1rem' }}>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: '600', 
                  marginBottom: '1rem',
                  color: '#991b1b'
                }}>
                  Basic Color Description
                </h3>
                <div style={{ 
                  backgroundColor: '#fff',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  fontFamily: 'monospace',
                  fontSize: '0.875rem',
                  color: '#7f1d1d',
                  lineHeight: '1.6',
                  border: '1px solid #fecaca'
                }}>
                  a sunset with pale pink and warm tones
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <h4 style={{ 
                    fontSize: '1rem', 
                    fontWeight: '600', 
                    marginBottom: '0.5rem',
                    color: '#991b1b'
                  }}>
                    Problems:
                  </h4>
                  <ul style={{ 
                    color: '#7f1d1d', 
                    fontSize: '0.875rem',
                    lineHeight: '1.8',
                    paddingLeft: '1.5rem',
                    margin: 0
                  }}>
                    <li>Vague color description</li>
                    <li>No precise hue control</li>
                    <li>AI may interpret differently</li>
                    <li>Inconsistent results</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 专业 AI 提示词 - ✅ */}
            <div style={{ 
              backgroundColor: '#f0fdf4',
              border: '2px solid #86efac',
              borderRadius: '1rem',
              padding: '2rem',
              position: 'relative'
            }}>
              <div style={{ 
                position: 'absolute',
                top: '-1rem',
                left: '2rem',
                backgroundColor: '#22c55e',
                color: 'white',
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 'bold'
              }}>
                ✅ Professional AI Prompt
              </div>
              <div style={{ marginTop: '1rem' }}>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: '600', 
                  marginBottom: '1rem',
                  color: '#166534'
                }}>
                  Precise Color Control
                </h3>
                <div style={{ 
                  backgroundColor: '#fff',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  fontFamily: 'monospace',
                  fontSize: '0.875rem',
                  color: '#14532d',
                  lineHeight: '1.6',
                  border: '1px solid #86efac',
                  wordBreak: 'break-word'
                }}>
                  [a beautiful sunset], in a solid Peach Punch color scheme, defined by Peach Punch hues and aesthetic tones --sref {baseUrl}/color-block/f97316.png --sw 1000 --no Peach Punch
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <h4 style={{ 
                    fontSize: '1rem', 
                    fontWeight: '600', 
                    marginBottom: '0.5rem',
                    color: '#166534'
                  }}>
                    Advantages:
                  </h4>
                  <ul style={{ 
                    color: '#14532d', 
                    fontSize: '0.875rem',
                    lineHeight: '1.8',
                    paddingLeft: '1.5rem',
                    margin: 0
                  }}>
                    <li>Professional color names</li>
                    <li>Precise hue control</li>
                    <li>Reference color card URL</li>
                    <li>Consistent AI output</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            marginTop: '3rem'
          }}>
            <button 
              onClick={handleGetStarted}
              style={{ 
                padding: '1rem 3rem',
                border: 'none',
                borderRadius: '0.75rem',
                backgroundColor: '#3b82f6',
                color: 'white',
                fontSize: '1.25rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                letterSpacing: '0.5px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2563eb';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#3b82f6';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
              }}
            >
              Try It Now →
            </button>
          </div>
        </section>

        {/* 页脚 */}
        <FooterNew />
      </div>
    </div>
  );
};

// 创建ColorPickerPage组件
const ColorPickerPage = () => {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [colors, setColors] = useState<string[]>([]);
  const [colorNames, setColorNames] = useState<string[]>([]);
  const [colorProportions, setColorProportions] = useState<number[]>([]);
  const [paletteSize, setPaletteSize] = useState(5);
  const [selectedColorIndex, setSelectedColorIndex] = useState<number | null>(null);
  const [promptCopied, setPromptCopied] = useState(false);
  const [notification, setNotification] = useState<{ message: string; show: boolean }>({ message: '', show: false });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const uploadAreaRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const colorMatcherRef = useRef<any>(null);

  // 初始化颜色匹配器
  useEffect(() => {
    colorMatcherRef.current = new ColorMatcher();
    colorMatcherRef.current.loadColorData(colorData);
  }, []);

  // 处理点击上传
  const handleClickUpload = () => {
    fileInputRef.current?.click();
  };

  // 处理文件选择
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processImage(file);
    }
  };

  // 处理拖拽事件
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processImage(file);
    }
  };

  // 处理剪贴板粘贴
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (items) {
        for (let i = 0; i < items.length; i++) {
          if (items[i].type.indexOf('image') !== -1) {
            const file = items[i].getAsFile();
            if (file) {
              processImage(file);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('paste', handlePaste);
    return () => {
      window.removeEventListener('paste', handlePaste);
    };
  }, []);

  // 从图片中提取颜色
  const extractColorsFromImage = (imageUrl: string, callback: (colors: string[]) => void) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        callback(['#FF6B6B', '#4ECDC4']); // 默认颜色
        return;
      }
      
      // 设置canvas尺寸
      canvas.width = img.width;
      canvas.height = img.height;
      
      // 绘制图片
      ctx.drawImage(img, 0, 0);
      
      try {
        // 获取像素数据
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        
        // 统计颜色频率
        const colorFrequency: Record<string, number> = {};
        
        // 每10个像素采样一次，提高性能
        for (let i = 0; i < data.length; i += 40) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const hex = rgbToHex(r, g, b);
          colorFrequency[hex] = (colorFrequency[hex] || 0) + 1;
        }
        
        // 按频率排序
        const sortedColors = Object.entries(colorFrequency)
          .sort((a, b) => b[1] - a[1])
          .map(([color]) => color);
        
        // 选择前2个主色调
        const mainColors = sortedColors.slice(0, 2);
        
        // 如果提取的颜色少于2个，使用默认颜色
        if (mainColors.length < 2) {
          mainColors.push('#4ECDC4'); // 添加默认颜色
        }
        
        callback(mainColors);
      } catch (error) {
        console.error('Error extracting colors:', error);
        callback(['#FF6B6B', '#4ECDC4']); // 默认颜色
      }
    };
    img.onerror = () => {
      callback(['#FF6B6B', '#4ECDC4']); // 默认颜色
    };
    img.src = imageUrl;
  };

  // 处理图片处理
  const processImage = (file: File) => {
    setIsLoading(true);
    // 创建图片URL
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target?.result as string;
      setImage(imageUrl);
      
      // 从图片中提取颜色
      extractColorsFromImage(imageUrl, (extractedColors) => {
        setColors(extractedColors);
        // 获取颜色名称
        const names = extractedColors.map(color => getColorName(color));
        setColorNames(names);
        // 初始化颜色比例（百分比，总和为100，默认平分）
        const equalPercentage = Math.floor(100 / extractedColors.length);
        const proportions = extractedColors.map(() => equalPercentage);
        setColorProportions(proportions);
        setPaletteSize(extractedColors.length);
        setIsLoading(false);
      });
    };
    reader.readAsDataURL(file);
  };

  // 从图片中提取一个新颜色（不重复）
  const extractNewColorFromImage = (imageUrl: string, existingColors: string[], callback: (color: string) => void) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        callback('#3b82f6'); // 默认颜色
        return;
      }
      
      // 设置canvas尺寸
      canvas.width = img.width;
      canvas.height = img.height;
      
      // 绘制图片
      ctx.drawImage(img, 0, 0);
      
      try {
        // 获取像素数据
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        
        // 统计颜色频率
        const colorFrequency: Record<string, number> = {};
        
        // 每10个像素采样一次，提高性能
        for (let i = 0; i < data.length; i += 40) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const hex = rgbToHex(r, g, b);
          // 过滤掉已存在的颜色
          if (!existingColors.includes(hex)) {
            colorFrequency[hex] = (colorFrequency[hex] || 0) + 1;
          }
        }
        
        // 按频率排序
        const sortedColors = Object.entries(colorFrequency)
          .sort((a, b) => b[1] - a[1])
          .map(([color]) => color);
        
        // 选择频率最高的颜色
        if (sortedColors.length > 0) {
          callback(sortedColors[0]);
        } else {
          callback('#3b82f6'); // 默认颜色
        }
      } catch (error) {
        console.error('Error extracting new color:', error);
        callback('#3b82f6'); // 默认颜色
      }
    };
    img.onerror = () => {
      callback('#3b82f6'); // 默认颜色
    };
    img.src = imageUrl;
  };

  // 增加颜色
  const handleAddColor = () => {
    if (colors.length < 5 && image) {
      // 从原始图片中提取新颜色
      extractNewColorFromImage(image, colors, (newColor) => {
        const newColors = [...colors, newColor];
        setColors(newColors);
        // 获取颜色名称
        const newNames = [...colorNames, getColorName(newColor)];
        setColorNames(newNames);
        // 重新计算所有颜色的比例，平均分配100%
        const equalPercentage = Math.floor(100 / newColors.length);
        const newProportions = newColors.map(() => equalPercentage);
        setColorProportions(newProportions);
        setPaletteSize(newColors.length);
      });
    }
  };

  // 减少颜色
  const handleRemoveColor = () => {
    if (colors.length > 1) {
      const newColors = colors.slice(0, colors.length - 1);
      setColors(newColors);
      setColorNames(colorNames.slice(0, colorNames.length - 1));
      // 重新计算所有颜色的比例，平均分配100%
      const equalPercentage = Math.floor(100 / newColors.length);
      const newProportions = newColors.map(() => equalPercentage);
      setColorProportions(newProportions);
      setPaletteSize(newColors.length);
    }
  };

  // 处理图片点击选择颜色
  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // 创建临时canvas用于获取像素颜色
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    if (tempCtx) {
      // 使用图片的自然尺寸
      tempCanvas.width = e.currentTarget.naturalWidth;
      tempCanvas.height = e.currentTarget.naturalHeight;
      tempCtx.drawImage(e.currentTarget, 0, 0);
      
      // 计算实际像素位置（考虑图片可能被缩放）
      const scaleX = e.currentTarget.naturalWidth / e.currentTarget.width;
      const scaleY = e.currentTarget.naturalHeight / e.currentTarget.height;
      const pixelX = Math.floor(x * scaleX);
      const pixelY = Math.floor(y * scaleY);
      
      try {
        const pixel = tempCtx.getImageData(pixelX, pixelY, 1, 1).data;
        const hexColor = rgbToHex(pixel[0], pixel[1], pixel[2]);
        const colorName = getColorName(hexColor);
        
        // 添加新颜色
        if (colors.length >= 5) {
          // 删除最前面的第一个颜色，添加新颜色到末尾
          const newColors = [...colors.slice(1), hexColor];
          const newNames = [...colorNames.slice(1), colorName];
          // 重新计算所有颜色的比例，平均分配100%
          const equalPercentage = Math.floor(100 / newColors.length);
          const newProportions = newColors.map(() => equalPercentage);
          setColors(newColors);
          setColorNames(newNames);
          setColorProportions(newProportions);
          setPaletteSize(newColors.length);
          // 选中新添加的颜色（最后一个）
          setSelectedColorIndex(newColors.length - 1);
        } else {
          // 直接添加新颜色
          const newColors = [...colors, hexColor];
          const newNames = [...colorNames, colorName];
          // 重新计算所有颜色的比例，平均分配100%
          const equalPercentage = Math.floor(100 / newColors.length);
          const newProportions = newColors.map(() => equalPercentage);
          setColors(newColors);
          setColorNames(newNames);
          setColorProportions(newProportions);
          setPaletteSize(newColors.length);
          // 选中新添加的颜色（最后一个）
          setSelectedColorIndex(newColors.length - 1);
        }
      } catch (error) {
        console.error('Error getting pixel color:', error);
        // 出错时使用一个默认颜色
        const defaultColor = '#3b82f6';
        const defaultColorName = getColorName(defaultColor);
        if (colors.length >= 5) {
          // 删除最前面的第一个颜色，添加默认颜色到末尾
          const newColors = [...colors.slice(1), defaultColor];
          const newNames = [...colorNames.slice(1), defaultColorName];
          const newProportions = [...colorProportions.slice(1), Math.floor(100 / colors.length)];
          setColors(newColors);
          setColorNames(newNames);
          setColorProportions(newProportions);
          setPaletteSize(newColors.length);
          // 选中新添加的颜色（最后一个）
          setSelectedColorIndex(newColors.length - 1);
        } else {
          // 直接添加默认颜色
          const newColors = [...colors, defaultColor];
          const newNames = [...colorNames, defaultColorName];
          const newProportions = [...colorProportions, Math.floor(100 / (colors.length + 1))];
          setColors(newColors);
          setColorNames(newNames);
          setColorProportions(newProportions);
          setPaletteSize(newColors.length);
          // 选中新添加的颜色（最后一个）
          setSelectedColorIndex(newColors.length - 1);
        }
      }
    }
  };

  // RGB转HEX
  const rgbToHex = (r: number, g: number, b: number) => {
    return '#' + [r, g, b].map(x => {
      const hex = x.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }).join('');
  };

  // HEX转RGB
  const hexToRgbArray = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
      parseInt(result[1], 16),
      parseInt(result[2], 16),
      parseInt(result[3], 16)
    ] : [0, 0, 0];
  };

  // 获取颜色名称
  const getColorName = (hexColor: string) => {
    if (!colorMatcherRef.current) return 'Unknown';
    
    const rgb = hexToRgbArray(hexColor);
    try {
      const result = colorMatcherRef.current.findSimilarColor(rgb);
      return result.colorName;
    } catch (error) {
      return 'Unknown';
    }
  };

  // 获取匹配到的专业颜色的RGB值和名称
  const getMatchedColorInfo = (hexColor: string) => {
    if (!colorMatcherRef.current) return null;
    
    const rgb = hexToRgbArray(hexColor);
    try {
      const result = colorMatcherRef.current.findSimilarColor(rgb);
      return { name: result.colorName, rgb: result.rgb };
    } catch (error) {
      return null;
    }
  };

  const [colorBlockImage, setColorBlockImage] = useState<string | null>(null);

  // 生成单色块图片
  useEffect(() => {
    if (selectedColorIndex !== null) {
      const canvas = document.createElement('canvas');
      canvas.width = 200;
      canvas.height = 200;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = colors[selectedColorIndex];
        ctx.fillRect(0, 0, 200, 200);
        const dataUrl = canvas.toDataURL('image/png');
        setColorBlockImage(dataUrl);
      }
    }
  }, [selectedColorIndex, colors]);

  // 生成颜色色块图片URL
  const generateColorBlockUrl = (hexColor: string) => {
    const matchedInfo = getMatchedColorInfo(hexColor);
    if (matchedInfo) {
      const baseUrl = import.meta.env.VITE_BASE_URL || window.location.origin;
      const safeName = matchedInfo.name.replace(/\s+/g, '_').replace(/[^\w_]/g, '');
      return `${baseUrl}/color-block/${safeName}.jpg`;
    }
    const colorId = hexColor.replace('#', '');
    const baseUrl = import.meta.env.VITE_BASE_URL || window.location.origin;
    return `${baseUrl}/color-block/${colorId}.jpg`;
  };

  // 获取基础颜色名称（简单颜色名）
  const getBasicColorName = (colorName: string) => {
    const basicColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'brown', 'black', 'white', 'gray', 'grey'];
    const lowerName = colorName.toLowerCase();
    for (const basicColor of basicColors) {
      if (lowerName.includes(basicColor)) {
        return basicColor;
      }
    }
    return 'color';
  };

  // 绘制Canvas
  useEffect(() => {
    if (canvasRef.current && colors.length > 0) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const width = canvas.width;
        const height = canvas.height;
        
        ctx.clearRect(0, 0, width, height);
        
        // 计算总百分比
        const totalPercentage = colorProportions.reduce((sum, prop) => sum + prop, 0);
        
        let currentY = 0;
        colors.forEach((color, index) => {
          const percentage = colorProportions[index] || 0;
          const segmentHeight = (percentage / totalPercentage) * height;
          
          ctx.fillStyle = color;
          ctx.fillRect(0, currentY, width, segmentHeight);
          
          currentY += segmentHeight;
        });
      }
    }
  }, [colors, colorProportions]);

  // 处理色块点击
  const handleColorBlockClick = (index: number) => {
    setSelectedColorIndex(index);
  };

  // 处理删除单个色块
  const handleDeleteColorBlock = (index: number) => {
    const newColors = colors.filter((_, i) => i !== index);
    const newNames = colorNames.filter((_, i) => i !== index);
    // 重新计算所有颜色的比例，平均分配100%
    const equalPercentage = Math.floor(100 / newColors.length);
    const newProportions = newColors.map(() => equalPercentage);
    setColors(newColors);
    setColorNames(newNames);
    setColorProportions(newProportions);
    setPaletteSize(newColors.length);
    setSelectedColorIndex(null);
  };

  // HEX转RGB
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  // 复制AI prompt到剪贴板
  const handleCopyPrompt = () => {
    if (selectedColorIndex !== null) {
      const rgb = hexToRgb(colors[selectedColorIndex]);
      const colorName = colorNames[selectedColorIndex] || 'Unknown';
      const basicColorName = getBasicColorName(colorName);
      const colorBlockUrl = generateColorBlockUrl(colors[selectedColorIndex]);
      
      const prompt = `[Subject replace what you want to draw], in a solid ${colorName} color scheme, defined by ${colorName} hues and aesthetic tones --sref ${colorBlockUrl} --sw 1000 --no ${colorName}`;
      
      navigator.clipboard.writeText(prompt).then(() => {
        setPromptCopied(true);
        setTimeout(() => setPromptCopied(false), 2000);
      });
    }
  };

  // 处理删除图片
  const handleDeleteImage = () => {
    setImage(null);
    setColors([]);
    setColorNames([]);
    setColorProportions([]);
    setPaletteSize(0);
    setSelectedColorIndex(null);
  };

  return (
    <div style={{ 
      backgroundColor: '#f8fafc', 
      color: '#0f172a',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <button
          onClick={() => navigate('/')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '0.5rem',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s',
            boxShadow: '0 2px 4px rgba(59, 130, 246, 0.3)',
            marginBottom: '1.5rem'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#2563eb';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(59, 130, 246, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#3b82f6';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 4px rgba(59, 130, 246, 0.3)';
          }}
        >
          <span>←</span>
          <span>Back Home</span>
        </button>

        {isLoading ? (
          // 加载动画
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            minHeight: '60vh'
          }}>
            <div style={{ 
              fontSize: '1.5rem', 
              color: '#64748b', 
              marginBottom: '1rem'
            }}>
              正在提取色彩...
            </div>
            <div style={{ 
              width: '50px', 
              height: '50px', 
              border: '4px solid #e2e8f0', 
              borderTop: '4px solid #3b82f6', 
              borderRadius: '50%', 
              animation: 'spin 1s linear infinite'
            }}></div>
            <style>{`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}</style>
          </div>
        ) : colors.length > 0 ? (
          // 结果页面
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem'
          }}>
            {/* 第一列 - 原始图片 */}
            <div style={{ 
              padding: '1rem',
              border: '1px solid #e2e8f0',
              borderRadius: '1rem',
              backgroundColor: 'white',
              position: 'relative'
            }}>
              <h3 style={{ 
                marginBottom: '1rem', 
                fontSize: '1.25rem', 
                fontWeight: 'bold'
              }}>
                Original Image
              </h3>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                position: 'relative'
              }}>
                <img 
                  ref={imageRef}
                  src={image || undefined} 
                  alt="Original" 
                  style={{ 
                    maxWidth: '100%', 
                    maxHeight: '400px', 
                    borderRadius: '0.5rem',
                    cursor: 'crosshair'
                  }} 
                  onClick={handleImageClick}
                />
                {image && (
                  <button
                    onClick={handleDeleteImage}
                    style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(239, 68, 68, 0.9)',
                      color: 'white',
                      border: 'none',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(220, 38, 38, 0.9)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.9)';
                    }}
                    title="Delete image"
                  >
                    ×
                  </button>
                )}
              </div>
              <p style={{ 
                fontSize: '0.875rem', 
                color: '#64748b',
                textAlign: 'center',
                marginTop: '0.5rem'
              }}>
                Click anywhere on the image to extract a color
              </p>

              {/* Palette */}
              <div style={{ 
                marginTop: '2rem',
                padding: '1rem',
                border: '1px solid #e2e8f0',
                borderRadius: '1rem',
                backgroundColor: 'white'
              }}>
                <h3 style={{ 
                  marginBottom: '1rem', 
                  fontSize: '1.25rem', 
                  fontWeight: 'bold'
                }}>
                  Palette
                </h3>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}>
                  <div style={{ 
                    flex: '1',
                    display: 'flex',
                    height: '60px',
                    borderRadius: '0.5rem',
                    overflow: 'hidden'
                  }}>
                    {colors.map((color, index) => (
                      <div 
                        key={index} 
                        onClick={() => handleColorBlockClick(index)}
                        style={{
                          flex: '1',
                          backgroundColor: color,
                          position: 'relative',
                          cursor: 'pointer',
                          transition: 'transform 0.2s',
                          border: selectedColorIndex === index ? '3px solid #3b82f6' : 'none'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      >
                        {index === colors.length - 1 && (
                          <div style={{
                            position: 'absolute',
                            top: '50%',
                            right: '-10px',
                            transform: 'translateY(-50%)',
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            backgroundColor: 'white',
                            border: '2px solid #3b82f6'
                          }} />
                        )}
                      </div>
                    ))}
                  </div>
                  <div style={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.25rem'
                  }}>
                    <button 
                      onClick={handleAddColor}
                      style={{
                        width: '30px',
                        height: '30px',
                        border: '1px solid #e2e8f0',
                        borderRadius: '0.25rem',
                        backgroundColor: 'white',
                        cursor: 'pointer',
                        fontSize: '1.25rem'
                      }}
                    >
                      +
                    </button>
                    <button 
                      onClick={handleRemoveColor}
                      style={{
                        width: '30px',
                        height: '30px',
                        border: '1px solid #e2e8f0',
                        borderRadius: '0.25rem',
                        backgroundColor: 'white',
                        cursor: 'pointer',
                        fontSize: '1.25rem'
                      }}
                    >
                      -
                    </button>
                  </div>
                </div>
                <p style={{ 
                  fontSize: '0.875rem', 
                  color: '#64748b'
                }}>
                  Click on image above or color blocks to select a color
                </p>
              </div>
            </div>

            {/* 第二列 - 颜色信息面板 */}
            <div style={{ 
              padding: '1rem',
              border: '1px solid #e2e8f0',
              borderRadius: '1rem',
              backgroundColor: 'white',
              position: 'sticky',
              top: '2rem',
              height: 'fit-content'
            }}>
              {selectedColorIndex !== null ? (
                <>
                  <h3 style={{ 
                    marginBottom: '1.5rem', 
                    fontSize: '1.5rem', 
                    fontWeight: 'bold'
                  }}>
                    Color Details
                  </h3>
                  
                  <div style={{
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{
                      fontSize: '0.875rem',
                      color: '#64748b',
                      marginBottom: '0.25rem'
                    }}>
                      Color Name
                    </div>
                    <div style={{
                      fontSize: '1.125rem',
                      fontWeight: 'bold'
                    }}>
                      {colorNames[selectedColorIndex] || 'Unknown'}
                    </div>
                  </div>

                  <div style={{
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{
                      fontSize: '0.875rem',
                      color: '#64748b',
                      marginBottom: '0.25rem'
                    }}>
                      HEX
                    </div>
                    <div style={{
                      fontSize: '1.125rem',
                      fontWeight: 'bold',
                      fontFamily: 'monospace'
                    }}>
                      {colors[selectedColorIndex].toUpperCase()}
                    </div>
                  </div>

                  <div style={{
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{
                      fontSize: '0.875rem',
                      color: '#64748b',
                      marginBottom: '0.25rem'
                    }}>
                      RGB
                    </div>
                    <div style={{
                      fontSize: '1.125rem',
                      fontWeight: 'bold',
                      fontFamily: 'monospace'
                    }}>
                      {(() => {
                        const rgb = hexToRgb(colors[selectedColorIndex]);
                        return rgb ? `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` : 'N/A';
                      })()}
                    </div>
                  </div>

                  {(() => {
                    const rgb = hexToRgb(colors[selectedColorIndex]);
                    const colorName = colorNames[selectedColorIndex] || 'Unknown';
                    const basicColorName = getBasicColorName(colorName);
                    const colorBlockUrl = generateColorBlockUrl(colors[selectedColorIndex]);
                    return rgb ? (
                      <div style={{
                        marginBottom: '1.5rem'
                      }}>
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: '0.5rem'
                        }}>
                          <div style={{
                            fontSize: '0.875rem',
                            color: '#64748b',
                            fontWeight: '600'
                          }}>
                            AI Prompt
                          </div>
                          <button
                            onClick={handleCopyPrompt}
                            style={{
                              padding: '0.5rem 1rem',
                              border: '1px solid #3b82f6',
                              borderRadius: '0.5rem',
                              backgroundColor: 'white',
                              color: '#3b82f6',
                              fontSize: '0.875rem',
                              cursor: 'pointer',
                              transition: 'background-color 0.2s',
                              fontWeight: '500'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#eff6ff';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'white';
                            }}
                          >
                            {promptCopied ? '✓ Copied' : '📋 Copy'}
                          </button>
                        </div>
                        <div style={{
                          fontSize: '0.875rem',
                          fontWeight: 'bold',
                          fontFamily: 'monospace',
                          lineHeight: '1.5',
                          backgroundColor: '#f8fafc',
                          padding: '1rem',
                          borderRadius: '0.5rem',
                          border: '1px solid #e2e8f0',
                          wordWrap: 'break-word'
                        }}>
                          [Subject replace what you want to draw], in a solid {colorName} color scheme,<br />
                          defined by {colorName} hues and aesthetic tones --sref {colorBlockUrl} --sw 1000 --no {colorName}
                        </div>
                      </div>
                    ) : null;
                  })()}

                  {/* 单色色卡图片 */}
                  <div style={{
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{
                      fontSize: '0.875rem',
                      color: '#64748b',
                      marginBottom: '0.5rem'
                    }}>
                      Single Color Block
                    </div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                      marginBottom: '0.5rem'
                    }}>
                      {colorBlockImage ? (
                        <img
                          src={colorBlockImage}
                          alt="Color Block"
                          style={{
                            width: '200px',
                            height: '200px',
                            borderRadius: '0.5rem',
                            border: '1px solid #e2e8f0',
                            cursor: 'pointer',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            transition: 'transform 0.2s'
                          }}
                          onClick={async () => {
                            try {
                              const response = await fetch(colorBlockImage);
                              const blob = await response.blob();
                              await navigator.clipboard.write([
                                new ClipboardItem({ 'image/png': blob })
                              ]);
                              setNotification({ message: 'Color block copied to clipboard!', show: true });
                              setTimeout(() => setNotification({ message: '', show: false }), 2000);
                            } catch (err) {
                              console.error('Failed to copy color block:', err);
                              setNotification({ message: 'Failed to copy color block.', show: true });
                              setTimeout(() => setNotification({ message: '', show: false }), 2000);
                            }
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                          }}
                          title="Click to copy color block"
                        />
                      ) : (
                        <div
                          style={{
                            width: '200px',
                            height: '200px',
                            borderRadius: '0.5rem',
                            border: '1px solid #e2e8f0',
                            backgroundColor: '#f1f5f9',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#94a3b8',
                            fontSize: '0.875rem'
                          }}
                        >
                          Loading...
                        </div>
                      )}
                    </div>
                    <div style={{
                      fontSize: '0.75rem',
                      color: '#94a3b8',
                      textAlign: 'center'
                    }}>
                      Click to copy
                    </div>
                  </div>

                  <button
                    onClick={() => handleDeleteColorBlock(selectedColorIndex)}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: 'none',
                      borderRadius: '0.5rem',
                      backgroundColor: '#ef4444',
                      color: 'white',
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#dc2626';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#ef4444';
                    }}
                  >
                    🗑️ Delete Color
                  </button>
                </>
              ) : (
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '300px',
                  color: '#64748b',
                  textAlign: 'center',
                  padding: '2rem'
                }}>
                  <div style={{
                    fontSize: '3rem',
                    marginBottom: '1rem'
                  }}>
                    🎨
                  </div>
                  <div style={{
                    fontSize: '1.125rem',
                    fontWeight: '500'
                  }}>
                    Select a Color
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    marginTop: '0.5rem'
                  }}>
                    Click on any color in palette to see details
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          // 上传区域
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            minHeight: '60vh'
          }}>
            <h1 style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold', 
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              Upload an Image
            </h1>
            
            <input 
              type="file" 
              accept="image/*" 
              ref={fileInputRef} 
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            
            <div 
              ref={uploadAreaRef}
              onClick={handleClickUpload}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              style={{
                width: '100%',
                maxWidth: '600px',
                height: '400px',
                border: `2px dashed ${isDragging ? '#3b82f6' : '#e2e8f0'}`,
                borderRadius: '1.5rem',
                backgroundColor: isDragging ? '#eff6ff' : 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: '2rem'
              }}
            >
              <div style={{ 
                fontSize: '4rem', 
                marginBottom: '1rem'
              }}>
                📷
              </div>
              <h2 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                Click to Upload or Drag & Drop
              </h2>
              <p style={{ 
                fontSize: '1rem', 
                color: '#64748b', 
                textAlign: 'center',
                marginBottom: '1rem'
              }}>
                Supports JPG, PNG, and GIF files
              </p>
              <p style={{ 
                fontSize: '0.875rem', 
                color: '#94a3b8', 
                textAlign: 'center'
              }}>
                Or press Ctrl+V to paste an image
              </p>
            </div>
          </div>
        )}
      </div>

      {notification.show && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          backgroundColor: '#3b82f6',
          color: 'white',
          padding: '1rem 1.5rem',
          borderRadius: '0.5rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          zIndex: 1000,
          animation: 'fadeIn 0.3s ease-in-out'
        }}>
          {notification.message}
        </div>
      )}
    </div>
  );
};

// 颜色块生成器组件
const ColorBlockGenerator = () => {
  const { colorId } = useParams<{ colorId: string }>();
  
  useEffect(() => {
    if (colorId) {
      const hexColor = `#${colorId}`;
      const canvas = document.createElement('canvas');
      canvas.width = 500;
      canvas.height = 500;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = hexColor;
        ctx.fillRect(0, 0, 500, 500);
      }
      
      const dataUrl = canvas.toDataURL('image/png');
      const img = new Image();
      img.onload = () => {
        document.body.innerHTML = '';
        document.body.appendChild(img);
      };
      img.src = dataUrl;
    }
  }, [colorId]);
  
  return null;
};

// 应用根组件
const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/picker_color" element={<ColorPickerPage />} />
          <Route path="/color-block/:colorId.png" element={<ColorBlockGenerator />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/docs" element={<DocumentationPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="/cookies" element={<CookiePolicyPage />} />
          <Route path="/footer-preview" element={<FooterNew />} />
        </Routes>
    </Router>
  );
};

const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
