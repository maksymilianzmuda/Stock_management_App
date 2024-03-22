using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Stock
{
    public class UpdateStockRequestDto
    {
        [Required]
        [MaxLength(10, ErrorMessage ="Max amount of characters")]
        public string Symbol { get; set; } = string.Empty;
        [Required]
        [MaxLength(15, ErrorMessage ="Max amount of characters")]
        public string CompanyName {get; set;} = string.Empty;
        [Required]
        [Range(1,100000000)]
        public decimal Purchase{get; set;} 
        [Required]
        [Range(0.0001,100)]
        public decimal LastDiv{get; set;} 
        [Required]
        [MaxLength(10,ErrorMessage ="Max amount of characters")] 
        public string Industry{get;set;} = string.Empty;
        [Range(1,5000000000)]
        public long MarketCap {get;set;}
    }
}