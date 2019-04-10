Vec3 = function(x, y, z)
{
    this.x = x;
    this.y = y;
    this.z = z;
}

Vec3.prototype.add = function(v)
{
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
}

Vec3.prototype.sum = function()
{
    return this.x + this.y + this.z;
}

Vec3.prototype.min = function()
{
    if (this.x < this.y)
    {
        if(this.x <= this.z)
        {
            return this.x;
        }
        else
        {
            return this.z;
        }
    }

    if (this.y < this.z)
    {
        if (this.y <= this.x)
        {
            return this.y;
        }
        else
        {
            return this.x;
        }
    }

    if (this.z < this.x)
    {
        if (this.z <= this.y)
        {
            return this.z;
        }
        else
        {
            return this.y;
        }
    }
}

Vec3.prototype.mid = function()
{
    if (this.x < this.y)
    {
        if(this.x >= this.z)
        {
            return this.x;
        }
        else if(this.z < this.y)
        {
            return this.z;
        }
        else
        {
            return this.y;
        }
    }

    if (this.y < this.z)
    {
        if (this.y >= this.x)
        {
            return this.y;
        }
        else if(this.x < this.z)
        {
            return this.x;
        }
        else
        {
            return this.z;
        }
    }

    if (this.z < this.x)
    {
        if (this.z >= this.y)
        {
            return this.z;
        }
        else if(this.y < this.x)
        {
            return this.y;
        }
        else
        {
            return this.x;
        }
    }

}


Vec3.prototype.max = function()
{
    if (this.x > this.y)
    {
        if(this.x >= this.z)
        {
                return this.x;
            }
            else
            {
                return this.z;
            }
    }
    
        if (this.y > this.z)
        {
            if (this.y >= this.x)
            {
                return this.y;
            }
            else
            {
                return this.x;
            }
        }
    
        if (this.z > this.x)
        {
            if (this.z >= this.y)
            {
                return this.z;
            }
            else
            {
                return this.y;
            }
        }
}