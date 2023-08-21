### solve-search 
    解析url里的search部分 将其转换为便于使用的键值对

### 安装
    pnpm add solve-search
### 使用
```typescript
    import solve_search from 'solve-search';

    //?arg1=k&arg2=3 -> {arg:"1",arg2:"3"}
    const result = solve_search(location.search);
```

### 测试
    pnpm test